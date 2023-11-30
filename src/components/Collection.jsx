import React from "react"
import Card from "./Card"

const Collection = ({ data }) => {
  // Card returns a card by passing correct data
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-3">Latest Movies</h1>
      <div className="text-white flex items-center overflow-x-auto">
        {data.map((movie) => {
          return (
            <div>
              <Card category={movie} key={movie.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Collection
