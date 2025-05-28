import HeaderAction from "./HeaderAction";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-[80px]  flex items-center justify-between px-7  shadow-sm">
      <Logo />
      <HeaderAction />
    </header>
  );
};

export default Header;
