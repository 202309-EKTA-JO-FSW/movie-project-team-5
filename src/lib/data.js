const { latestMoviesUrl } = require("./util")

// fetch latest movies
export const fetchLatestMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const res = await fetch(latestMoviesUrl)
  return await res.json()
}
