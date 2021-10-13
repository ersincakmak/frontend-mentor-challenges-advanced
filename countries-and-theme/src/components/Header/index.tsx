import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-6 bg-white shadow-component dark:bg-dark-blue transition">
      <h1 className="text-xl font-black">Where in the world?</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
