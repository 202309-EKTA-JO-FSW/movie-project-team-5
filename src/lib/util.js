const API_KEY = "da3c06c669cc47bf0856ca78b85cfe7c"
const BASE_URL = "https://api.themoviedb.org/3"

// latest movies
export const latestMoviesUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`

export const getImage = (img) => {
  return `https://image.tmdb.org/t/p/original/${img}`
}
