import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { switchTheme } from "../../redux/themeSlice";

const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const handleSwtichTheme = () => {
    dispatch(switchTheme());
  };

  const RenderThemeIcon: React.FC<{
    className: string;
  }> = ({ className }) => {
    if (theme === "dark") {
      return <IoMoonSharp className={className} />;
    }
    return <IoMoonOutline className={className} />;
  };

  return (
    <div
      className="font-semibold flex items-center gap-2 cursor-pointer"
      onClick={() => handleSwtichTheme()}
    >
      <RenderThemeIcon className="text-lg transition" />
      Dark Mode
    </div>
  );
};

export default ThemeSwitcher;
