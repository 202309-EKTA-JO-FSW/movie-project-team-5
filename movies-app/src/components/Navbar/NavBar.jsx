import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-[80px] bg-black text-white p-5">
      <div className="">
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex justify-around w-[200px]">
        <Link href={"/"}>Genres</Link>
        <Link href={"/"}>Movies</Link>
        <Link href={"/"}>Actors</Link>
      </div>
      <div>Search</div>
    </nav>
  )
}

export default NavBar
