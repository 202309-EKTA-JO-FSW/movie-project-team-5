import React from "react"
import Collection from "../Collection"

const PopularMovies = ({ data }) => {
  return (
    <div className="mt-24">
      <Collection data={data} title={"Popular Movies"} />
    </div>
  )
}

export default PopularMovies
