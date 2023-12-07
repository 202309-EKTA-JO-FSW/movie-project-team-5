import Link from "next/link"

import SearchBar from "./SearchBar"
import { useDispatch } from "react-redux"
import { changeCategory } from "@/feature/category/categorySlice"

const NavBar = ({ genresList }) => {
  const dispatch = useDispatch()
  // movies drop down list
  const movies = ["Latest", "Popular", "Top_Rated", "Upcoming"]
  return (
    <nav className="flex flex-col items-center justify-center h-[100px] bg-black text-white sm:flex-row">
      <div className="flex items-center w-full p-5 sm:ml-5">
        <div className="md:text-2xl font-bold text-slate-300">
          <Link href={"/"}>Movies Night</Link>
        </div>
        <div className="flex w-full justify-center sm:justify-around sm:w-[300px] sm:ml-10 ">
          <div className="relative group mr-4">
            <button className="focus:outline-none md:text-lg text-cyan-600 font-bold">
              Genres
            </button>
            <div className="absolute top-full left-0 bg-slate-100 shadow-lg shadow-black py-2 px-3 rounded hidden group-hover:flex flex-col text-black z-50 text-sm h-[200px] overflow-y-auto">
              {genresList.map((genres) => {
                return (
                  <Link
                    href={`/movies`}
                    key={genres.id}
                    onClick={() =>
                      dispatch(changeCategory(genres.name.toLowerCase()))
                    }
                  >
                    <div className="hover:bg-cyan-600 p-1 rounded">
                      {genres.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="relative group mr-4">
            <button className="focus:outline-none md:text-lg text-cyan-600 font-bold">
              Movies
            </button>
            <div className="absolute top-full left-0 bg-slate-100 shadow-lg shadow-black py-2 px-3 rounded hidden group-hover:flex flex-col text-black z-50 text-sm">
              {movies.map((genres, id) => {
                return (
                  <Link
                    href={`/movies?category=${genres.toLowerCase()}`}
                    key={id}
                    onClick={() =>
                      dispatch(changeCategory(genres.toLowerCase()))
                    }
                  >
                    <div className="hover:bg-cyan-600 p-1 rounded">
                      {genres}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="focus:outline-none md:text-lg text-cyan-600 font-bold">
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
