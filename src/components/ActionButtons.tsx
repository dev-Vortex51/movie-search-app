import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export const ActionButtons = () => (
  <div className="flex flex-wrap gap-6">
    <button className="flex items-center cursor-pointer gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl px-6 py-3 shadow-lg transition-transform transform hover:-translate-y-1">
      <FaPlay size={18} />
      Watch Trailer
    </button>
    <button className="flex items-center cursor-pointer gap-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold rounded-xl px-6 py-3 shadow-lg transition-transform transform hover:-translate-y-1">
      <FiPlus size={18} />
      Add to Watchlist
    </button>
  </div>
);
