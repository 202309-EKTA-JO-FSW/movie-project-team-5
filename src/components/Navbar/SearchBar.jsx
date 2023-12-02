
"use client"
import { fetchSearchMovies } from "@/lib/data"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import SearchDropDown from "./SearchDropDown"
import { useDebouncedCallback } from "use-debounce"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

import { useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()


  const handleChanges = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    const queryString = params.toString() ? `?${params.toString()}` : ""

    replace(`${pathname}${queryString}`)
  }, 300)


  return (
    <div>
      <div className="relative group w-[270px]">
        <input
          type="text"
          name="search"
          placeholder="search..."
          className="p-1 border rounded text-black"
          onChange={(e) => handleChanges(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="absolute top-[100%] transition duration-300 bg-white text-black z-50 mt-1 rounded overflow-y-auto">
          <SearchDropDown />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
