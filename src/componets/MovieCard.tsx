import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface MovieCardProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre?: string;
  Plot?: string;
}

const truncate = (text: string, maxLength: number) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const MovieCard = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
  Plot,
}: MovieCardProps) => {
  const [imgError, setImgError] = useState(false);
  const bgImage = !imgError && Poster !== "N/A" ? `url(${Poster})` : undefined;

  return (
    <Link
      to={`/movies/${imdbID}`}
      className="group relative h-[300px] rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <div
        className={`w-full h-full ${
          bgImage
            ? "bg-cover bg-center bg-no-repeat"
            : "bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400"
        }`}
        style={bgImage ? { backgroundImage: bgImage } : {}}
      >
        {!bgImage && (
          <div className="text-center px-4 text-sm">
            <p className="text-2xl font-bold">No Image</p>
          </div>
        )}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent text-white p-4
        transform translate-y-full group-hover:translate-y-0 sm:group-hover:translate-y-0 sm:opacity-0 sm:group-hover:opacity-100
        transition-all duration-500 ease-in-out sm:pointer-events-none"
      >
        <div className="pointer-events-auto">
          <span className="inline-block bg-blue-600 dark:bg-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2 truncate max-w-full">
            {Type}
          </span>
          <h2 className="text-lg sm:text-xl font-semibold mb-1 truncate max-w-full">
            {truncate(Title, 60)}
          </h2>
          <p className="text-sm text-gray-200 dark:text-gray-300 hidden sm:block truncate max-w-full">
            {Plot ? truncate(Plot, 90) : "No description available."}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="bg-gray-800 dark:bg-gray-700 text-xs px-2 py-1 rounded-full truncate max-w-[80px]">
              {Year}
            </span>
            <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
              View
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
