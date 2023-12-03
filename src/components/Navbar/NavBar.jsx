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
    <nav className="flex justify-around items-center h-[80px] bg-black text-white py-5 px-14">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex ml-10 w-full">
        <div className="relative group mr-4">
          <button className="focus:outline-none">Genres</button>
          <div className="absolute top-full left-0 bg-white py-2 px-1 hidden group-hover:flex flex-col text-black z-50 text-sm">
            {genresList.map((genres) => {
              return (
                <div className=" hover:bg-blue-400" key={genres.id}>
                  <Link href={`/movies/${genres.names}`}>{genres.name}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="relative group mr-4">
          <button className="focus:outline-none">Movies</button>
          <div className="absolute top-full left-0 bg-white py-2 px-1 hidden group-hover:flex flex-col text-black z-50 text-sm">
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
        <div className="focus:outline-none">
          <Link href={"/actors"}>Actors</Link>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </nav>
  )
}

export default NavBar
