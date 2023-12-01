import LatestMovies from "@/components/home/LatestMovies"
import { latestMoviesUrl, moviesGenresListUrl, popularMoviesUrl } from "./utils"

// fetch latest movies
export const fetchLatestMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log(latestMoviesUrl())
  const res = await fetch(latestMoviesUrl(), {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjcxMTNhYjA2ZDYxZDkyNjI5YjIxMTg1NDQzMTg1YiIsInN1YiI6IjVlOGE2NjgwMTc3OTJjMDAxMzcxYTBmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gDZkQvHu2aO6tvqu9erTV2IpzcgPj37u9sMMHcccHNs`,
    },
  })
  return await res.json()
}

export const fetchPopularMovies = async () => {
  const res = await fetch(popularMoviesUrl())
  return await res.json()
}

export const fetchMoviesGenresList = async () => {
  const res = await fetch(moviesGenresListUrl())
  return await res.json()
}
