import MovieCard from "./MovieCard";
import Loader from "./Loader";

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre?: string;
  Plot?: string;
};

type MoviesContainerProps = {
  movies: Movie[];
  isPending: boolean;
};

const MoviesContainer = ({ movies, isPending }: MoviesContainerProps) => {
  if (isPending) {
    return <Loader />;
  }
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">No movies found.</div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 sm:px-0">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

export default MoviesContainer;
