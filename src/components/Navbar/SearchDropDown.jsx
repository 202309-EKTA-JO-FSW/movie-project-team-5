"use client"

import { fetchSearchMovies } from "@/lib/data"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SearchDropDown = () => {
  const [searchMovies, setSearchMovies] = useState([])
  const { query } = useRouter()

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchSearchMovies(query.query)
        setSearchMovies(data.results)
      } catch (error) {
        console.error("cannot found any movies")
      }
    }

    getMovies()
  }, [query.query])
  if (query.query) {
    return (
      <div>
        {searchMovies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>
        })}
      </div>
    )
  }
}

export default SearchDropDown
