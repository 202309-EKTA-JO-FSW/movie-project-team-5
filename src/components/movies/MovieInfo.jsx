import React from "react"

const MovieInfo = ({ movie }) => {
  if (!movie) {
    return <p> Movie is Loading...</p>
  }

  const movie = {
    backdrop_path,
    title,
    release_date,
    runtime,
    original_language,
    vote_average,
    vote_count,
    overview,
    production_companies,
    genres,
    spoken_languages,
  }

  return (
    <div>
      <p>{movie.id}</p>
      <p>{movie.poster}</p>
      <h1>{movie.overview}</h1>
      <p>{movie.description}</p>
    </div>
  )
}

export default MovieInfo
