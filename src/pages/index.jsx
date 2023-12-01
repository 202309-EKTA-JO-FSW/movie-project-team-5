import LatestMovies from "@/components/home/LatestMovies"
import PopularMovies from "@/components/home/PopularMovies"
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

export default function Home({ latestMovies, popularMovies }) {
  // collection component return a collextion of card with row scrolling

  return (
    <main className="h-[100vh] mx-[20px] md:mx-[100px] mt-[20px]">
      <LatestMovies data={latestMovies} />
      <PopularMovies data={popularMovies} />
    </main>
  )
}
