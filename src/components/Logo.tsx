import { RiMovieAiLine } from "react-icons/ri";

interface LogoProps {
  color?: string;
}

const Logo = ({ color }: LogoProps) => {
  const colorClass = color
    ? `text-${color}`
    : "text-black dark:text-white text-2xl";

  return (
    <div className="flex items-center gap-2">
      <span className="text-blue-700 dark:text-blue-400 text-4xl">
        <RiMovieAiLine />
      </span>
      <h1 className={colorClass}>Moveit</h1>
    </div>
  );
};

export default Logo;
