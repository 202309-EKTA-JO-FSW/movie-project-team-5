import Collection from "@/components/Collection"
import { fetchLatestMovies } from "@/lib/data"

export async function getStaticProps() {
  const latestMovies = await fetchLatestMovies()
  return { props: { latestMovies: latestMovies.results } }
}

export default function Home({ latestMovies }) {
  // collection component return a collextion of card with row scrolling
  return (
    <main className="h-[100vh] mx-[20px] md:mx-[100px] mt-[20px]">
      <div>
        <Collection data={latestMovies} />
      </div>
    </main>
  )
}
