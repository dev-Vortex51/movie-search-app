import HeaderAction from "./HeaderAction";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-[60px] md:h-[80px] flex items-center justify-between px-4 md:px-7 shadow-sm w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <Logo />
      <HeaderAction />
    </header>
  );
};

export default Header;
