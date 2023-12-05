"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import SearchDropDown from "./SearchDropDown"
import { useDebouncedCallback } from "use-debounce"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleChanges = useDebouncedCallback((term) => {
    // when user type searchParams will create a query
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    // the query will be added by replacing with new path
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
          className="p-1 border-4 border-cyan-600 rounded placeholder-slate-500 bg-slate-100 text-black"
          onChange={(e) => handleChanges(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="absolute top-[100%] transition duration-300 bg-slate-100 shadow-lg shadow-black text-black z-50 mt-2 rounded overflow-y-auto">
          <SearchDropDown />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
