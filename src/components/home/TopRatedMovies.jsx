import React from "react"
import Collection from "../Collection"

const TopRatedMovies = ({ data }) => {
  return (
    <div className="mt-24">
      <Collection data={data} title={"Top Rated"} />
    </div>
  )
}

export default TopRatedMovies
