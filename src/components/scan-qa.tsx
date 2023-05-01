import { FC } from 'react';
import useData from '../context/data';

const ScanQr = () => {
  const { screenshot } = useData();
  return (
    <div>
      <h1>
        Please Wait 10 seconds then Scan the QR Code using the whatsapp in your
        phone
      </h1>
      {screenshot && <img src={screenshot} alt="qr code" />}
    </div>
  );
};

export default ScanQr;
