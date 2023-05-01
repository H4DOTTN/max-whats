import { useMutation } from 'react-query';
import { SessionsService } from '../../api';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import useData from '../context/data';
const { sessionsControllerStart, sessionsControllerStop } = SessionsService;

const useWhatsApp = () => {
  const startSessionMutation = useMutation(sessionsControllerStart);
  const stopSessionMutation = useMutation(sessionsControllerStop);
  const { setScreenshot, session, setSession, setTotalSend } = useData();

  const getScreenshot = async (session: string) => {
    const response = await axios.get(
      `https://safwen.cyberdivision-test.xyz/api/screenshot?session=${session}`
    );
    setScreenshot(response.data.image);
  };
  const stopSession = async () => {
    stopSessionMutation.mutateAsync(
      {
        requestBody: {
          name: session,
        },
      },
      {
        onSuccess: (data) => {},
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const startSession = async () => {
    session && stopSession();
    setTotalSend(0);
    startSessionMutation.mutateAsync(
      {
        requestBody: {
          name: uuidv4(),
        },
      },
      {
        onSuccess: (data) => {
          setSession(data.name);
          setScreenshot('');
          setTimeout(() => getScreenshot(data.name), 10000);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return { startSession, stopSession, getScreenshot };
};

export default useWhatsApp;
