import { BsGithub } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";

function HeaderAction() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-gray-200 h-10 w-10 flex items-center justify-center text-gray-900   rounded hover:bg-gray-300 transition cursor-pointer">
        <HiOutlineMoon />
      </button>
      <button className="h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-900   rounded hover:bg-gray-300 transition cursor-pointer">
        <BsGithub />
      </button>
    </div>
  );
}

export default HeaderAction;
