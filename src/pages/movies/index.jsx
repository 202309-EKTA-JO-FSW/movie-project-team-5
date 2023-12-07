import { categoryMoviesUrl } from "@/lib/utils";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from "@/components/Card";
//import {fetchMoviesGenresList} from '@/lib/data'



const MoviesPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [initialmovies, setInitialmovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url;
        if (category === "latest") {
          url = categoryMoviesUrl("now_playing", currentPage);
        } else {
          url = categoryMoviesUrl(category, currentPage);
        }

        const res = await fetch(url);
        const data = await res.json();

        // Update state based on the fetched data
        setInitialmovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (

    <div>
      <h2 className="text-4xl font-extrabold mb-6 text-cyan-600">{category} Movies</h2>
      <div className="flex flex-wrap">
      {initialmovies.map((movie) => (
        <div key={movie.id}>
          <Card category={movie} />
        </div>
      ))}
      </div>

      <div className="flex justify-center items-center mt-4" >
        <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
         onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>

        <span className="mx-4">{`Page ${currentPage} of ${totalPages}`}</span>
        <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`} onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>

      </div>
    </div>
  );
};

export default MoviesPage;
