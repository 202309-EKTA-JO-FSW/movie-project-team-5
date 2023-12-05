import { latestMoviesUrl, moviesGenresListUrl, popularMoviesUrl } from "./utils"

// fetch latest movies
export const fetchLatestMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  const res = await fetch(latestMoviesUrl())
  const data = await res.json()
  return data
}

export const fetchPopularMovies = async () => {
  const res = await fetch(popularMoviesUrl())
  return await res.json()
}

export const fetchMoviesGenresList = async () => {
  const res = await fetch(moviesGenresListUrl())
  return await res.json()
}
