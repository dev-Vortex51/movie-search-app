import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";

export const useMovieDetails = (id: string) => {
  const { isPending, data: movie } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
  });

  return { isPending, movie };
};
