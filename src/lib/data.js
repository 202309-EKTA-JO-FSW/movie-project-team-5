import {
  latestMoviesUrl,
  moviesGenresListUrl,
  popularMoviesUrl,
  searchMoviesUrl,
} from "./utils"

// fetch latest movies
export const fetchLatestMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  try {
    const res = await fetch(latestMoviesUrl())
    console.log(latestMoviesUrl())
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

export const fetchPopularMovies = async () => {
  try {
    const res = await fetch(popularMoviesUrl())
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

export const fetchMoviesGenresList = async () => {
  try {
    const res = await fetch(moviesGenresListUrl())
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

export const fetchSearchMovies = async (query) => {
  try {
    const res = await fetch(searchMoviesUrl(query))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}
