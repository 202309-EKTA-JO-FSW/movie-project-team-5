"use client"

import { fetchSearchMovies } from "@/lib/data"
import { getImage } from "@/lib/utils"
import Image from "next/image"
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
    console.log(searchMovies)

    getMovies()
  }, [query.query])
  if (query.query) {
    return (
      <div className="h-[300px] p-1">
        {searchMovies.map((movie) => {
          return (
            <div
              className="flex items-start border border-black p-1 rounded my-2"
              key={movie.id}
            >
              <Image
                src={getImage(movie.poster_path)}
                alt={`${movie.title} image`}
                width={200}
                height={0}
                priority={true}
                className="w-16 mr-3"
              />
              <div>
                <p className="text-sm">{movie.title}</p>
                <p>{movie.year}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SearchDropDown
