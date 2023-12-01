import React from "react"
import Collection from "../Collection"

const LatestMovies = ({ data }) => {
  return (
    <div>
      <Collection data={data} title={"Latest Movies"} />
    </div>
  )
}

export default LatestMovies
