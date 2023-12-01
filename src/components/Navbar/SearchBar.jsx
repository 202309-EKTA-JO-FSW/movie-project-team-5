import { useSearchParams } from "next/navigation"

const SearchBar = () => {
  const searchParams = useSearchParams()

  const handleChanges = (term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search..."
          className="p-1 border rounded text-black"
          onChange={(e) => handleChanges(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBar
