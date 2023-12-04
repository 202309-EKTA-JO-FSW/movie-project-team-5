import { useEffect, useState } from "react"
import NavBar from "./Navbar/NavBar"
import { fetchMoviesGenresList } from "@/lib/data"

export default function Layout({ children }) {
  const [genresList, seGenresList] = useState([])

  useEffect(() => {
    const getGenresList = async () => {
      const genresList = await fetchMoviesGenresList()
      seGenresList(genresList.genres)
    }
    getGenresList()
  }, [])
  console.log(genresList)
  return (
    <>
      <NavBar genresList={genresList} />
      <main className="text-white">{children}</main>
      <footer>Footer</footer>
    </>
  )
}
