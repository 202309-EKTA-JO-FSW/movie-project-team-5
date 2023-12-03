import React from "react"
import { fetchLatestMovies } from "@/lib/data"
import Card from '../components/Card'

export async function getStaticProps() {
  // Attempt to fetch latest movies
  const moviesResponse = await fetchLatestMovies();

  // If successful, this line will execute, otherwise it will throw an error
  const latestMovies = await moviesResponse.json();

  // Return the props object
  return { props: { latestMovies } };
}

const Movies = ({latestMovies}) => {
  return (
    <div>
    <h1>Latest Movies</h1>
    <div className="flex flex-wrap">
      {latestMovies.map((movie) => (
        <Card key={movie.id} category={movie} />
      ))}
    </div>
  </div>
  );
};
  

export default Movies;
