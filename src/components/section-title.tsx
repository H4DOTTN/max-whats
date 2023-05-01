import { FC } from "react";
import { useTheme } from "../context/theme";
type SectionTitleProps = {
    title: string;
    imgLight: string;
    imgDark: string;
};
const SectionTitle:FC<SectionTitleProps> = ({imgDark,imgLight,title}) => {
 const {theme} = useTheme();
    return (
    <header className="flex font-normal text-xs flex-row justify-start items-center gap-[10px]">
      <img
        className="w-[14px] aspect-square object-cover"
        src={theme === 'dark' ? imgLight : imgDark}
        alt="add file"
      />
      <p className="font-normal text-[#7B7AC1] dark:text-white capitalize">{title}</p>
    </header>
  );
};

export default SectionTitle;
