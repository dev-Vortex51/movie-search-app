import { IoSearchOutline } from "react-icons/io5";
import { useQueryContext } from "../contexts/QueryContext";

const Searchbar = () => {
  const { query, setQuery } = useQueryContext();
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full max-w-2xl px-7 py-3 rounded-full text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 outline-none border-0 transition-colors duration-300"
        style={{
          boxShadow:
            "0 4px 24px 0 rgba(0,0,0,0.12), 0 1.5px 6px 0 rgba(0,0,0,0.10)",
        }}
      />
      <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 text-white bg-blue-700 h-11 w-11 flex items-center justify-center rounded-full cursor-pointer">
        <IoSearchOutline />
      </span>
    </div>
  );
};

export default Searchbar;
