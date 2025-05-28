import { RiMovieAiLine } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-blue-700 text-4xl">
        <RiMovieAiLine />
      </span>
      <h1 className="text-2xl text-black-0">Moveit</h1>
    </div>
  );
};

export default Logo;
