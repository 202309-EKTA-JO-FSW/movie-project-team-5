const API_KEY = "da3c06c669cc47bf0856ca78b85cfe7c"
const BASE_URL = "https://api.themoviedb.org/3"

// get image
export const getImage = (img) => {
  return `https://image.tmdb.org/t/p/original/${img}`
}

// get year
export const getReleaseYear = (date) => {
  const year = date.split("-")
  return year[0]
}

// search movies
export const searchMoviesUrl = (query) => {
  return `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
}

// Movies genres list
export const moviesGenresListUrl = () => {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
}

// get movies depending on category movies
export const categoryMoviesUrl = (category, page = "1") => {
  return `${BASE_URL}/movie/${category}?language=en-US&page=${page.toString()}&api_key=${API_KEY}`
}
