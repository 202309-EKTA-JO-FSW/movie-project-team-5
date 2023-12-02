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

// latest movies
export const latestMoviesUrl = () => {
  return `${BASE_URL}/discover/movie?include_video=false&language=en-US&page=1&release_date.gte=now&sort_by=popularity.desc&api_key=${API_KEY}`
}

// popular movies
export const popularMoviesUrl = () => {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}`
}

// Movies genres list

export const moviesGenresListUrl = () => {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
}

// search movies
export const searchMoviesUrl = (query) => {
  return `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
}
