import NavBar from "./Navbar/NavBar"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
