import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchMoviesGenresList } from "@/lib/data"
import SearchBar from "./SearchBar"

const NavBar = () => {
  const [genresList, seGenresList] = useState([])

  useEffect(() => {
    const getGenresList = async () => {
      const genresList = await fetchMoviesGenresList()
      seGenresList(genresList.genres)
    }
    return getGenresList
  }, [])

  const movies = ["Latest", "Popular", "Top_Rated", "Upcoming"]
  return (
    <nav className="flex flex-col items-center justify-center h-[100px] bg-black text-white sm:flex-row">
      <div className="flex items-center w-full p-5 font-bold sm:ml-5">
        <div className="md:text-lg">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="flex w-full justify-center sm:justify-around sm:w-[300px] sm:ml-10 ">
          <div className="relative group mr-4">
            <button className="focus:outline-none md:text-lg text-cyan-600">
              Genres
            </button>
            <div className="absolute top-full left-0 bg-white py-2 px-1 hidden group-hover:flex flex-col text-black z-50 text-sm">
              {genresList.map((genres) => {
                return (
                  <div className=" hover:bg-blue-400" key={genres.id}>
                    <Link href={`/movies/${genres.name.toLocaleLowerCase()}`}>
                      {genres.name}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative group mr-4">
            <button className="focus:outline-none md:text-lg text-cyan-600">
              Movies
            </button>
            <div className="absolute top-full left-0 bg-white py-2 px-1 hidden group-hover:flex flex-col text-black z-50">
              {movies.map((genres, id) => {
                return (
                  <div className=" hover:bg-blue-400" key={id}>
                    <Link
                      href={
                        genres === "Latest"
                          ? "/movies"
                          : `/movies/${genres.toLocaleLowerCase()}`
                      }
                    >
                      {genres}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="focus:outline-none md:text-lg text-cyan-600">
            <Link href={"/actors"}>Actors</Link>
          </div>
        </div>
      </div>
      <div className="text-center sm:mr-5">
        <SearchBar />
      </div>
    </nav>
  )
}

export default NavBar
