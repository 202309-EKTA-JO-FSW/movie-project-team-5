import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleChanges = (term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    const queryString = params.toString() ? `?${params.toString()}` : ""

    replace(`${pathname}${queryString}`)
  }

  return (
    <div>
      <div className="relative group">
        <input
          type="text"
          name="search"
          placeholder="search..."
          className="p-1 border rounded text-black"
          onChange={(e) => handleChanges(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="absolute top-[100%] bg-white text-black z-50 w-full mt-1 rounded"></div>
      </div>
    </div>
  )
}

export default SearchBar
