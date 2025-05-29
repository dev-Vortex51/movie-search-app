import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white dark:text-gray-100 py-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-4">
        <div className="flex items-center gap-2">
          <Logo color="white" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
          <span className="text-xs text-gray-300 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <span className="hidden md:inline-block text-gray-500 dark:text-gray-400 mx-2">
            |
          </span>
          <span className="flex items-center gap-1 text-xs justify-center md:justify-start">
            Built with
            <span className="text-yellow-400 font-bold">React</span>
            <span className="text-pink-400 font-bold">&</span>
            <span className="text-blue-300 font-bold">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
