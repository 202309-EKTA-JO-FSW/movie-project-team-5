<<<<<<< HEAD
<<<<<<< HEAD
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

  const handleChanges = (term) => {
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
  }

<<<<<<< HEAD
=======
  }
>>>>>>> 9ea4a47 (create a query params to pass it in url #5)
=======
>>>>>>> 2f9755c (add query in link when write in search engin #5)
  return (
    <div>
      <div>
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
      </div>
    </div>
  )
}

export default SearchBar
