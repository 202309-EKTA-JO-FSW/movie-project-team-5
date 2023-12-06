import {
  categoryMoviesUrl,
  moviesGenresListUrl,
  searchMoviesUrl,
} from "./utils"

// fetch genres list
export const fetchMoviesGenresList = async () => {
  try {
    const res = await fetch(moviesGenresListUrl())
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

// fetch movies depending on user input
export const fetchSearchMovies = async (query) => {
  try {
    const res = await fetch(searchMoviesUrl(query))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

// fetch latest movies
export const fetchLatestMovies = async (page) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000))

    const res = await fetch(categoryMoviesUrl("now_playing", page))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

// fetch popular movies
export const fetchPopularMovies = async (page) => {
  try {
    const res = await fetch(categoryMoviesUrl("popular", page))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

// fetch top rated movies
export const fetchTopRatedMovies = async (page) => {
  try {
    const res = await fetch(categoryMoviesUrl("top_rated", page))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}

// fetch upcoming movies
export const fetchUpcomingMovies = async (page = "1") => {
  try {
    const res = await fetch(categoryMoviesUrl("upcoming", page))
    return await res.json()
  } catch (error) {
    console.error("Error fetching Latest Movies:", error)
  }
}
