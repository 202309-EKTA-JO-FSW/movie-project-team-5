import React from "react"
import Card from "@/components/Card"
import { fetchLatestMovies } from "@/lib/data"
import { useState } from "react"


export async function getStaticProps() {
  const initialMovies = await fetchLatestMovies(1);
  return { props: { initialMovies: initialMovies.results } };
}

const Movies = ({ initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreMovies = async () => {
    const nextPage = currentPage + 1;
    const newMovies = await fetchLatestMovies(nextPage);
    setMovies([...newMovies.results])
    setCurrentPage(nextPage);
  };

  const fetchPreviousMovies = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      const newMovies = await fetchLatestMovies(prevPage);
      setMovies([...newMovies.results]);
      setCurrentPage(prevPage);
    }
  };

  return (
    <div>
      <h1 className="focus:outline-none ">Latest Movies</h1>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} category={movie} />
        ))}
      </div>
      
      <button
          onClick={fetchPreviousMovies}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Previous
        </button>
      <button onClick={fetchMoreMovies}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >Next Page</button>
    </div>
    
  );
};

export default Movies;