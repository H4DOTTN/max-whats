import { useTheme } from "../context/theme";
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'
const ThemeSwitch = () => {
  const { theme,toggleTheme} = useTheme();

  return (
    <div className="font-light flex flex-row justify-start items-center gap-2">
      <p className="capitalize">{theme}</p>
      <div className="flex h-[16px] w-[30px] rounded-full p-1 cursor-pointer bg-light-primary dark:bg-dark-primary" onClick={toggleTheme}>
        <span className={`h-full transition-transform duration-300 ${theme === 'dark' ? 'translate-x-0':'translate-x-[15px]' }  aspect-square rounded-full flex justify-center items-center `}>
            <img className="object-cover"  alt={'theme'} src={theme ==='dark' ? moon : sun} />
        </span>
      </div>
    </div>
  );
};

export default ThemeSwitch; 
