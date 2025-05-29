import { useQueryContext } from "../contexts/QueryContext";
import { useMovies } from "../hooks/useMovies";
import type { MovieCardProps } from "./MovieCard";
import MoviesContainer from "./MoviesContainer";
import SubContainerTop from "./SubContainerTop";

const Container = () => {
  const { query, selectedType, selectedYear } = useQueryContext();
  const { movies, isPending } = useMovies(query);

  let filteredMovies: MovieCardProps[] | undefined = movies;

  if (selectedType || selectedYear) {
    filteredMovies = movies?.filter((movie: MovieCardProps) => {
      const matchesType =
        !selectedType ||
        movie.Type.toLowerCase() === selectedType.toLowerCase();
      const matchesYear = !selectedYear || movie.Year.includes(selectedYear);
      return matchesType && matchesYear;
    });
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 py-6 px-4 sm:px-6 lg:px-8">
      {/* Optional top filter or search UI */}
      <SubContainerTop />

      {/* Movie grid and loading handling */}
      <MoviesContainer movies={filteredMovies || []} isPending={isPending} />
    </div>
  );
};

export default Container;
