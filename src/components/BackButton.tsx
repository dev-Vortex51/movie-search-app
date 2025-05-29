import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-8 flex items-center cursor-pointer gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-base transition-transform transform hover:-translate-x-1"
    >
      <FaChevronLeft size={18} />
      Back to results
    </button>
  );
};
