import React from "react"
import Collection from "../Collection"

const LatestMovies = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3 text-cyan-600">What's new?</h1>
      <Collection data={data} />
    </div>
  )
}

export default LatestMovies
