import React from "react"
import Collection from "../Collection"

const LatestMovies = ({ data }) => {
  return (
    <div>
      <Collection data={data} title={"What's new?"} />
    </div>
  )
}

export default LatestMovies
