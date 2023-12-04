import React from "react"
import Collection from "../Collection"

const UpcomingMovies = ({ data }) => {
  return (
    <div className="mt-24">
      <Collection data={data} title={"Upcoming Movies"} />
    </div>
  )
}

export default UpcomingMovies
