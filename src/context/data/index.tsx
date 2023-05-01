import { createContext, useState, useEffect, useContext, useRef } from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { ChattingService } from '../../../api';
import { useMutation } from 'react-query';
import axios from 'axios';
const { chattingControllerSendTextGet, chattingControllerSendImage } =
  ChattingService;

type DataProviderProps = {
  children: React.ReactNode;
};

type DataContextProps = {
  file: any;
  setFile: (data: any) => void;
  message: string;
  setMessage: (data: string) => void;
  image: File;
  setImage: (data: File | null) => void;
  screenshot: string;
  setScreenshot: (data: string) => void;
  session: string;
  setSession: (data: string) => void;
  sentCounter: number;
  setSentCounter: React.Dispatch<React.SetStateAction<number>>;
  totalSend: number;
  setTotalSend: (data: number) => void;
  sending: boolean;
  setSending: (data: boolean) => void;
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  pauseRef: React.MutableRefObject<boolean>;
  skipRef: React.MutableRefObject<boolean>;
  resumeRef: React.MutableRefObject<number>;
  handleSubmit: () => void;
  stop: () => void;
};

const DataContext = createContext<DataContextProps>(null!);

// provider
export const DataProvider = ({ children }: DataProviderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<any>(null);
  const [screenshot, setScreenshot] = useState<string>('');
  const [session, setSession] = useState<string>('');
  const [sentCounter, setSentCounter] = useState<number>(0);
  const [totalSend, setTotalSend] = useState<number>(0);
  const [sending, setSending] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const pauseRef = useRef<boolean>(false);
  const skipRef = useRef<boolean>(false);
  const resumeRef = useRef<number>(0);

  const chattingControllerSendTextGetMutation = useMutation(
    chattingControllerSendTextGet
  );
  const chattingControllerSendImageMutation = useMutation(
    chattingControllerSendImage
  );
  const pauseArray = async (pauseTime: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, pauseTime);
    });
  };

  const stop = () => {
    pauseRef.current = false;
    resumeRef.current = 0;
    setSentCounter(0);
    setTotalSend(0);
    setPaused(false);
    setSending(false);
  };

  const sendText = async (
    data: {
      phone: string;
      message: string;
      session: string | undefined;
    },
    index: number,
    total: number
  ) => {
    await pauseArray(1000);
    chattingControllerSendTextGetMutation.mutateAsync(
      {
        phone: data.phone,
        text: data.message,
        session: data.session,
      },
      {
        onSuccess: () => {},
        onError: () => {
          console.log('error');
        },
      }
    );
    setSentCounter((prev) => prev + 1);
    resumeRef.current = resumeRef.current + 1;
    console.log({ resume: resumeRef.current, index, total, sentCounter });
    if (index >= total) {
      toast.success('All messages sent');
      setTimeout(() => {
        stop();
      }, 3000);
      console.log('done');
    }
  };
  const sendImage = async (
    data: {
      phone: string;
      message: string | undefined;
      session: string | undefined;
      url: string;
    },
    index: number,
    total: number
  ) => {
    await pauseArray(1000);

    chattingControllerSendImageMutation.mutateAsync(
      {
        requestBody: {
          caption: data.message || '',
          session: data.session,
          chatId: data.phone,
          url: 'https://safwen.cyberdivision-test.xyz/img/' + data.url,
        },
      },
      {
        onSuccess: () => {},
        onError: () => {
          console.log('error');
        },
      }
    );
    setSentCounter((prev) => prev + 1);
    resumeRef.current = resumeRef.current + 1;
    console.log({ resume: resumeRef.current, index, total, sentCounter });

    if (index >= total) {
      toast.success('All messages sent');
      setTimeout(() => {
        stop();
      }, 3000);
      console.log('done');
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error('Please upload a file');
      return;
    }
    if (!message && !image) {
      toast.error('Please add a message or image');
      return;
    }

    if (pauseRef.current) {
      pauseRef.current = false;
    } else {
      stop();
    }

    setSending(true);
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = target?.result;
      const { data } = await Papa.parse(csv as string, {
        header: true,
      });
      setTotalSend(data.length);
      const phoneNumbers = data.map((item: any) => item.Phone);

      phoneNumbers.splice(0, resumeRef.current);
      if (image) {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post(
          `https://safwen.cyberdivision-test.xyz/img/`,
          formData
        );

        for (let index = 0; index < phoneNumbers.length; index++) {
          if (skipRef.current) {
            skipRef.current = false;
            return;
          }

          await sendImage(
            {
              message: message,
              phone: phoneNumbers[index],
              session: session,
              url: response.data.url,
            },
            index + 1,
            phoneNumbers.length
          );
          if (pauseRef.current) {
            return;
          }
        }
      } else {
        for (let index = 0; index < phoneNumbers.length; index++) {
          if (skipRef.current) {
            skipRef.current = false;
            return;
          }
          await sendText(
            {
              message: message,
              phone: phoneNumbers[index],
              session: session,
            },
            index + 1,
            phoneNumbers.length
          );

          if (pauseRef.current) {
            return;
          }
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <DataContext.Provider
      value={{
        file,
        setFile,
        message,
        setMessage,
        image,
        setImage,
        screenshot,
        setScreenshot,
        session,
        setSession,
        sentCounter,
        setSentCounter,
        totalSend,
        setTotalSend,
        sending,
        setSending,
        pauseRef,
        resumeRef,
        handleSubmit,
        paused,
        setPaused,
        stop,
        skipRef,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default useData;
