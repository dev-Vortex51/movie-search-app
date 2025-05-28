const API_KEY = "c23338df";

export const getMovies = async (query: string) => {
  let res;
  if (query) {
    res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  } else {
    res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`);
  }

  const data = await res.json();
  console.log(data);
  if (data.Response === "False") throw new Error(data.Error);

  return data.Search;
};

export const getMovieDetails = async (id: string) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  const data = await res.json();
  console.log(data);
  if (data.Response === "False") throw new Error(data.Error);
  return data;
};
