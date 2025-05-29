import { BsDot } from "react-icons/bs";

export const MovieInfoHeader = ({ movie }: { movie: any }) => (
  <div className="flex flex-wrap items-center gap-3 mb-6 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full">
      {movie.Year}
    </span>
    <BsDot className="text-blue-500 dark:text-blue-300 text-xl" />
    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full">
      {movie.Genre || "Genre Unknown"}
    </span>
    <BsDot className="text-blue-500 dark:text-blue-300 text-xl" />
    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full">
      {movie.Runtime || "Unknown Runtime"}
    </span>
    <BsDot className="text-blue-500 dark:text-blue-300 text-xl" />
    <span
      className={`px-2 py-1 rounded-full text-xs font-bold ${
        movie.Rated && movie.Rated !== "N/A"
          ? "bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-900"
          : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
      }`}
    >
      {movie.Rated && movie.Rated !== "N/A"
        ? movie.Rated.split(" ")[0].toUpperCase()
        : "NR"}
    </span>
  </div>
);
