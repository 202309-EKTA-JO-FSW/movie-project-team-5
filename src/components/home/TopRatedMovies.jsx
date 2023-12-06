import React from "react"
import Collection from "../Collection"

const TopRatedMovies = ({ data }) => {
  return (
    <div className="mt-24">
      <h1 className="text-3xl font-bold mb-3 text-cyan-600">
        Top Rated Movies
      </h1>
      <Collection data={data} />
    </div>
  )
}

export default TopRatedMovies
