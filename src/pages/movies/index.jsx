import React from "react"
import LatestMovies from "@/components/home/LatestMovies"
import { fetchLatestMovies } from "@/lib/data"

export async function getStaticProps() {
  const latestMovies = await fetchLatestMovies()
  

  return {
    props: {
      latestMovies: latestMovies.results
    },
  }
}

const Movies = ({latestMovies}) => {
  if (!latestMovies) {
    return <h1 className="text-xl">Loading.....</h1>
  }
  return (
    <main className="h-[100vh] mx-[20px] md:mx-[100px] mt-[20px]">
      <LatestMovies data={latestMovies} />
    </main>
  )
  }
export default Movies;
