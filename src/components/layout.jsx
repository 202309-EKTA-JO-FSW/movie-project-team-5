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
// begin to build the single movie page after creating a new branch
