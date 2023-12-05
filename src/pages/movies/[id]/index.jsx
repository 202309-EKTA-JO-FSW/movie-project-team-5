import React from "react"
import MovieInfo from "./MovieInfo"

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=da3c06c669cc47bf0856ca78b85cfe7c",
  )
  const movies = await response.json()
  const paths = movies.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=da3c06c669cc47bf0856ca78b85cfe7c`,
  )
  const movie = await response.json()

  return {
    props: {
      movie: movie.results,
    },
  }
}

const Movie = ({ movie }) => {
  return <MovieInfo movie={movie} />
}

export default Movie
