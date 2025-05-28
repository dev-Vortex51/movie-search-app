import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/api";

export const useMovies = (query: string) => {
  const { isPending, data: movies } = useQuery({
    queryKey: ["movies", query],
    queryFn: () => getMovies(query),
  });

  return { isPending, movies };
};
