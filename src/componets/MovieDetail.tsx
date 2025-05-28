import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { FaChevronLeft, FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import Loader from "./Loader";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isPending, movie } = useMovieDetails(id!);
  const navigate = useNavigate();
  return (
    <div className="w-[70%] mx-auto flex flex-col gap-4 py-4">
      {isPending && <Loader />}
      {movie && (
        <div className="flex flex-col gap-3 ">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft />
            <p>Back to results</p>
          </div>
          <div className="flex gap-10 mt-3">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-xl shadow-lg object-cover  h-[21.5rem]"
            />
            <div
              className="grid grid-rows-[auto_auto_1fr_auto] h-80 mt-4 gap-2"
              style={{ minHeight: "20rem" }}
            >
              <h1 className="text-2xl font-bold text-blue-800">
                {movie.Title}
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 font-semibold">{movie.Year}</p>
                <BsDot className="text-blue-500" />
                <p className="text-blue-700">{movie.Genre}</p>
                <BsDot className="text-blue-500" />
                <p className="text-gray-600">{movie.Runtime}</p>
                <BsDot className="text-blue-500" />
                <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded text-xs font-bold">
                  {movie.Rated && movie.Rated !== "N/A"
                    ? movie.Rated.split(" ")[0].toUpperCase()
                    : "NR"}
                </span>
              </div>
              <div className="flex flex-col gap-3 mt-4 overflow-y-auto">
                <h1 className="text-lg font-semibold text-blue-700">
                  Overview
                </h1>
                <p className="text-gray-700">{movie.Plot}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition cursor-pointer">
                  <FaPlay size={10} />
                  <span>Watch Trailer</span>
                </button>
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow transition cursor-pointer">
                  <FiPlus />
                  <span>Add to waitlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
