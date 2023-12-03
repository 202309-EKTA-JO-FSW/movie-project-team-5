import React from "react"
import Collection from "../Collection"

const UpcomingMovies = ({ data }) => {
  return (
    <div>
      <Collection data={data} title={"Upcoming Movies"} />
    </div>
  )
}

export default UpcomingMovies
