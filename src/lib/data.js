import { latestMoviesUrl, moviesGenresListUrl, popularMoviesUrl } from "./utils"

// fetch latest movies
export const fetchLatestMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  try {
    const res = await fetch(latestMoviesUrl())
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
