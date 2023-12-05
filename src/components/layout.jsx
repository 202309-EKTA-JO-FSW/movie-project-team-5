import { useEffect, useState } from "react"
import NavBar from "./Navbar/NavBar"
import { fetchMoviesGenresList } from "@/lib/data"

export default function Layout({ children }) {
  const [genresList, seGenresList] = useState([])

  // fetching genres drop down list data to generate when the navbar it renders
  useEffect(() => {
    const getGenresList = async () => {
      const genresList = await fetchMoviesGenresList()
      seGenresList(genresList.genres)
    }
    getGenresList()
  }, [])

  return (
    <>
      <NavBar genresList={genresList} />
      <main className="text-white">{children}</main>
      <footer>Footer</footer>
    </>
  )
}
