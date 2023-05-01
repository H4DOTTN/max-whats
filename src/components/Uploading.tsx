import cancel from '../assets/icons/cancle.svg';
import pauseIcon from '../assets/icons/pause.svg';
import pauseDark from '../assets/icons/pause-dark.svg';
import resumeIcon from '../assets/icons/resume.svg';
import useData from '../context/data';
import completed from '../assets/icons/completed.svg';
import { useTheme } from '../context/theme';
import { useState } from 'react';
const Uploading = () => {
  const {
    sentCounter,
    totalSend,
    pauseRef,
    handleSubmit,
    paused,
    setPaused,
    stop,
    skipRef,
  } = useData();
  const { theme } = useTheme();
  const pause = () => {
    setPaused(true);
    pauseRef.current = true;
  };
  const resume = () => {
    setPaused(false);
    handleSubmit();
  };
  const reset = () => {
    stop();
    skipRef.current = true;
  };

  return (
    <div className="px-8 py-4 bg-[#F7F7F7] dark:bg-[#373737] flex flex-row justify-between items-center text-xs  font-medium ">
      <div className="flex flex-col gap-2">
        {sentCounter === totalSend ? (
          <>
            <h2 className="text-sm capitalize">Completed</h2>
          </>
        ) : (
          <>
            <h2 className="text-sm capitalize">
              {paused ? 'Paused' : 'Sending'}
            </h2>
            <p className=" items-center text-light-textSecondary ">
              {sentCounter} / {totalSend}
            </p>
          </>
        )}
      </div>
      {sentCounter === totalSend ? (
        <img className="cursor-pointer" src={completed} alt="pause" />
      ) : (
        <div className="flex flex-row items-center gap-2">
          {paused ? (
            <button onClick={() => resume()}>
              <img src={resumeIcon} alt="resume" />
            </button>
          ) : (
            <button onClick={() => pause()}>
              <img
                src={theme === 'light' ? pauseIcon : pauseDark}
                alt="pause"
              />
            </button>
          )}
          <button onClick={reset}>
            <img className="cursor-pointer" src={cancel} alt="cancle" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Uploading;
