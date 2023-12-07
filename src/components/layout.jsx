import { useEffect, useState } from "react"
import NavBar from "./Navbar/NavBar"
import { fetchMoviesGenresList } from "@/lib/data"
import { Provider } from "react-redux"
import { store } from "@/app/store"

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
      <Provider store={store}>
        <NavBar genresList={genresList} />
        <main className="text-white  m-[20px] md:mx-[100px]">{children}</main>
        <footer>Footer</footer>
      </Provider>
    </>
  )
}
