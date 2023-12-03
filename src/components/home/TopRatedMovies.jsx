import React from "react"
import Collection from "../Collection"

const TopRatedMovies = ({ data }) => {
  return (
    <div>
      <Collection data={data} title={"Top Rated"} />
    </div>
  )
}

export default TopRatedMovies
