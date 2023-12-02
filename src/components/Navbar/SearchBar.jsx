<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client"
import { fetchSearchMovies } from "@/lib/data"
>>>>>>> f4cde26 (fetching search data from searchParams)
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import SearchDropDown from "./SearchDropDown"
import { useDebouncedCallback } from "use-debounce"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
=======
import { useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()
>>>>>>> 9ea4a47 (create a query params to pass it in url #5)
=======
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
>>>>>>> 2f9755c (add query in link when write in search engin #5)

  const handleChanges = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f9755c (add query in link when write in search engin #5)
    const queryString = params.toString() ? `?${params.toString()}` : ""

    replace(`${pathname}${queryString}`)
  }, 300)

<<<<<<< HEAD
=======
  }
>>>>>>> 9ea4a47 (create a query params to pass it in url #5)
=======
>>>>>>> 2f9755c (add query in link when write in search engin #5)
  return (
    <div>
      <div className="relative group">
        <input
          type="text"
          name="search"
          placeholder="search..."
          className="p-1 border rounded text-black"
          onChange={(e) => handleChanges(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
          defaultValue={searchParams.get("query")?.toString()}
=======
>>>>>>> 9ea4a47 (create a query params to pass it in url #5)
=======
          defaultValue={searchParams.get("query")?.toString()}
>>>>>>> 2f9755c (add query in link when write in search engin #5)
        />
        <div className="absolute top-[100%] bg-white text-black z-50 w-full mt-1 rounded">
          <SearchDropDown />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
