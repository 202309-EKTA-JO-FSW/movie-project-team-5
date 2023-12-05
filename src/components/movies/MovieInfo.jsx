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
  // check the image url ...........
  const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h1>{title}</h1>
      <p>Release Date: {release_date}</p>
      <p>Runtime: {runtime} minutes</p>
      <p>Language: {original_language}</p>
      <p>
        Rating: {vote_average} ({vote_count} votes)
      </p>
      <p>Overview: {overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h2>Spoken Languages</h2>
      <ul>
        {/* here i choose the english language as general language */}
        {spoken_languages.map((language) => (
          <li key={language.iso_639_1}>{language.name}</li>
        ))}
      </ul>
      <h2>Production Companies</h2>
      {production_companies.map((company) => (
        <div key={company.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} // check the source here
            alt={company.name}
          />
          <p>{company.name}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieInfo
