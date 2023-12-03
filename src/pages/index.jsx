import LatestMovies from "@/components/home/LatestMovies"
import PopularMovies from "@/components/home/PopularMovies"
import TopRatedMovies from "@/components/home/TopRatedMovies"
import {
  fetchLatestMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/lib/data"

export async function getStaticProps() {
  const latestMovies = await fetchLatestMovies()
  const popularMovies = await fetchPopularMovies()
  const topRatedMovies = await fetchTopRatedMovies()

  return {
    props: {
      latestMovies: latestMovies.results,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
    },
  }
}

export default function Home({ latestMovies, popularMovies, topRatedMovie }) {
  // collection component return a collextion of card with row scrolling
  if (!latestMovies) {
    return <h1 className="text-xl">Loading.....</h1>
  }
  return (
    <main className="h-[100vh] mx-[20px] md:mx-[100px] mt-[20px]">
      <LatestMovies data={latestMovies} />
      <PopularMovies data={popularMovies} />
      <TopRatedMovies data={topRatedMovie} />
    </main>
  )
}
