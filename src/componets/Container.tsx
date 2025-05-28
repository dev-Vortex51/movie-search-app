import { useQueryContext } from "../contexts/QueryContext";
import { useMovies } from "../hooks/useMovies";
import MovieContainer from "./MoviesContainer";
import SubContainerTop from "./SubContainerTop";

const Container = () => {
  const { query } = useQueryContext();
  const { movies, isPending } = useMovies(query);
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-4 py-4">
      <SubContainerTop />
      <MovieContainer movies={movies} isPending={isPending} />
    </div>
  );
};

export default Container;
