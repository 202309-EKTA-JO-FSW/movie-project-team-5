const API_KEY = "da3c06c669cc47bf0856ca78b85cfe7c"
const BASE_URL = "https://api.themoviedb.org/3"

// get image
export const getImage = (img) => {
  return `https://image.tmdb.org/t/p/original/${img}`
}

// latest movies
export const latestMoviesUrl = () => {
  return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
}

// popular movies
export const popularMoviesUrl = () => {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}`
}
