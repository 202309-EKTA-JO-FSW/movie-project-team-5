"use client"
import { fetchSearchMovies } from "@/lib/data"
import { getImage, getReleaseYear } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
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
      <div className="h-[300px] p-1">
        {searchMovies.map((movie) => {
          return (
            <Link href={`movies/${movie.id}`} key={movie.id}>
              <div className="flex items-start  p-1 rounded my-2 hover:bg-blue-300">
                <Image
                  src={getImage(movie.poster_path)}
                  alt={`${movie.title} image`}
                  width={200}
                  height={0}
                  priority={true}
                  className="w-16 mr-3 rounded"
                />
                <div>
                  <p className="text-md font-bold">{movie.title}</p>
                  <p className="text-sm text-gray-700">
                    {getReleaseYear(movie.release_date)}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default SearchDropDown
