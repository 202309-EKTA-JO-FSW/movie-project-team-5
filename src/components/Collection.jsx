import React from "react"
import Card from "./Card"

const Collection = ({ data, title }) => {
  // Card returns a card by passing correct data
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
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
