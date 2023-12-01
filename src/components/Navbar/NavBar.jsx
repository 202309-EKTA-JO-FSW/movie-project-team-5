import { useState } from "react"
import Link from "next/link"

const NavBar = () => {
  const [showGenres, setShowGenres] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showActors, setShowActors] = useState(false)

  const toggleGenres = () => {
    setShowGenres(!showGenres)
    setShowMovies(false)
    setShowActors(false)
  }

  const toggleMovies = () => {
    setShowMovies(!showMovies)
    setShowGenres(false)
    setShowActors(false)
  }

  const toggleActors = () => {
    setShowActors(!showActors)
    setShowGenres(false)
    setShowMovies(false)
  }

  return (
    <nav className="flex justify-between items-center h-[80px] bg-black text-white p-5">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex">
        <div className="relative mr-4">
          <button
            onMouseEnter={toggleGenres}
            onMouseLeave={toggleGenres}
            className="focus:outline-none"
          >
            Genres
          </button>
          {showGenres && (
            <div className="absolute top-full left-0 bg-white p-2">
              <Link href={"/genre/action"}>Action</Link>
              <Link href={"/genre/comedy"}>Comedy</Link>
            </div>
          )}
        </div>
        <div className="relative mr-4">
          <button
            onMouseEnter={toggleMovies}
            onMouseLeave={toggleMovies}
            className="focus:outline-none"
          >
            Movies
          </button>
          {showMovies && (
            <div className="absolute top-full left-0 bg-white p-2">
              <Link href={"/movies"}>All Movies</Link>
              <Link href={"/movies/popular"}>Popular Movies</Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onMouseEnter={toggleActors}
            onMouseLeave={toggleActors}
            className="focus:outline-none"
          >
            Actors
          </button>
          {showActors && (
            <div className="absolute top-full left-0 bg-white p-2">
              <Link href={"/actors"}>All Actors</Link>
              <Link href={"/actors/popular"}>Popular Actors</Link>
            </div>
          )}
        </div>
      </div>
      <div>Search</div>
    </nav>
  )
}

export default NavBar
