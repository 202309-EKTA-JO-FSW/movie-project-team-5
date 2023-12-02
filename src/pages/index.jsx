import LatestMovies from "@/components/home/LatestMovies"
import { fetchLatestMovies, fetchPopularMovies } from "@/lib/data"

export async function getStaticProps() {
  const latestMovies = await fetchLatestMovies()
  const popularMovies = await fetchPopularMovies()

  return {
    props: {
      latestMovies: latestMovies.results,
      popularMovies: popularMovies.results,
    },
  }
}

export default function Home({ latestMovies }) {
  // collection component return a collextion of card with row scrolling
  if (!latestMovies) {
    return <h1 className="text-xl">Loading.....</h1>
  }
  return (
    <main className="h-[100vh] mx-[20px] md:mx-[100px] mt-[20px]">
      <LatestMovies data={latestMovies} />
    </main>
  )
}
