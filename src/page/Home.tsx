import { useEffect } from 'react';
import AddImage from '../components/add-image';
import AddMessage from '../components/add-message';
import Header from '../components/header';
import ScanQr from '../components/scan-qa';
import Submit from '../components/submit';
import ThemeSwitch from '../components/theme-switch';
import UploadFile from '../components/upload-file';
import Uploading from '../components/Uploading';
import useData from '../context/data';
import useWhatsApp from '../hooks/useWhatsApp';

const Home = () => {
  const { startSession, stopSession } = useWhatsApp();
  const { session, sending } = useData();
  useEffect(() => {
    startSession();

    return () => {
      session && stopSession();
    };
  }, []);
  return (
    <main className="w-screen ">
      <div className="px-4 pb-10 sm:container mx-auto  flex flex-col gap-6 ">
        <Header />
        <ScanQr />
        <ThemeSwitch />
        <UploadFile />
        <AddMessage />
        <AddImage />
        <Submit />
        {sending && <Uploading />}
      </div>
    </main>
  );
};

export default Home;
