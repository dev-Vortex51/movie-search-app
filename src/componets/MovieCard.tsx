import React from "react";
import { Link } from "react-router-dom";

type MovieCardProps = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre?: string;
  Plot?: string;
};

const truncate = (text: string, maxLength: number) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const MovieCard: React.FC<MovieCardProps> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
  Genre,
  Plot,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto my-8 overflow-hidden border border-gray-100">
      <div className="relative w-full md:w-40 h-60 flex-shrink-0">
        {Poster && Poster !== "N/A" ? (
          <img
            src={Poster}
            alt={Title}
            className="w-full h-full object-cover md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl">
            No Image
          </div>
        )}
        <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide shadow font-semibold">
          {Type}
        </span>
      </div>
      <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            {truncate(Title, 25)}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-semibold">
              {Year}
            </span>
          </div>
          {Plot && (
            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {truncate(Plot, 80)}
            </p>
          )}
        </div>
        <Link
          to={`/movies/${imdbID}`}
          className="inline-block text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full px-4 py-2 text-sm font-bold shadow hover:from-yellow-500 hover:to-yellow-700 transition cursor-pointer "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
