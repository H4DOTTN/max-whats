import { ToastContainer } from 'react-toastify';
import { useTheme } from '../context/theme';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { theme } = useTheme();

  return (
    <>
      <header className="flex font-light text-xs flex-row justify-around items-baseline capitalize  text-dark-textSecondary py-10">
        <p className="uppercase ">Fucking oath Mate</p>

        <h2 className="font-light whitespace-nowrap text-sm  sm:text-2xl text-light-text  dark:text-dark-text ">
          <span className="font-bold">Max</span> Whats
        </h2>
        <p className="uppercase">Fucking oath Mate</p>
      </header>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </>
  );
};

export default Header;
