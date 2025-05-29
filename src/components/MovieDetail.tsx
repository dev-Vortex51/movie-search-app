import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { BackButton } from "./BackButton";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { PosterImage } from "./PosterImage";
import { MovieInfoHeader } from "./MovieInfoHeader";
import { StarRating } from "./StarRating";
import { MovieOverview } from "./MovieOverview";
import { MovieCast } from "./MovieCast";
import { ActionButtons } from "./ActionButtons";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isPending, movie } = useMovieDetails(id!);
  const [imgError, setImgError] = useState(false);

  if (isPending) return <LoadingSkeleton />;

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-12 max-w-7xl mx-auto  transition-colors duration-300">
      <BackButton />

      {movie && (
        <div className="relative flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-white dark:bg-gray-900/90 rounded-xl shadow-2xl p-8 md:p-12">
          <div className="w-full max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-lg border dark:border-gray-800 group">
            <PosterImage
              src={movie.Poster}
              alt={movie.Title}
              onError={() => setImgError(true)}
              hasError={imgError}
            />
          </div>

          <div className="flex flex-col flex-grow text-gray-900 dark:text-gray-100">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-900 dark:text-blue-300">
              {movie.Title}
            </h1>
            <MovieInfoHeader movie={movie} />
            <StarRating rating={movie.imdbRating} />
            <MovieOverview overview={movie.Plot} />
            <MovieCast actors={movie.Actors} />
            <ActionButtons />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
