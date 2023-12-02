import NavBar from "./Navbar/NavBar"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="text-white">{children}</main>
      <footer>Footer</footer>
    </>
  )
}
