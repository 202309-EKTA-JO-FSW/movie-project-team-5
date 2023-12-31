import LatestMovies from "@/components/home/LatestMovies"
import PopularMovies from "@/components/home/PopularMovies"
import TopRatedMovies from "@/components/home/TopRatedMovies"
import UpcomingMovies from "@/components/home/UpcomingMovies"

import {
  fetchLatestMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/lib/data"

export async function getStaticProps() {
  const latestMovies = await fetchLatestMovies()
  const popularMovies = await fetchPopularMovies()
  const topRatedMovies = await fetchTopRatedMovies()
  const upcomingMovies = await fetchUpcomingMovies()

  return {
    props: {
      latestMovies: latestMovies.results,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      upcomingMovies: upcomingMovies.results,
    },
  }
}

export default function Home({
  latestMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  name,
}) {
  // collection component return a collextion of card with row scrolling
  return (
    <section className="">
      <LatestMovies data={latestMovies} />
      <PopularMovies data={popularMovies} />
      <TopRatedMovies data={topRatedMovies} />
      <UpcomingMovies data={upcomingMovies} />
    </section>
  )
}
