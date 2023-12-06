import React from "react"
import Card from "./Card"

const Collection = ({ data }) => {
  // Card returns a card by passing correct data
  return (
    <div>
      <div className="text-white flex items-center overflow-x-auto">
        {data.map((movie) => {
          return (
            <div key={movie.id}>
              <Card category={movie} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Collection
