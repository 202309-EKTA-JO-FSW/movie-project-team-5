import React from "react"
import Collection from "../Collection"

const PopularPeople = ({ data }) => {
  return (
    <div className="mt-24">
      <Collection data={data} title={"Popular People"} />
    </div>
  )
}

export default PopularPeople
