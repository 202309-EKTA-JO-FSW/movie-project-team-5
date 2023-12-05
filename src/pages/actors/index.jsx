import { useEffect, useState } from "react"
import axios from "axios"
import { getImage } from "@/lib/utils"
import ActorCard from "./ActorCard"
export default function ActorList() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=da3c06c669cc47bf0856ca78b85cfe7c",
      )
      .then((response) => {
        console.log(response.data.results.id)
        setActors(response.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {actors.map((actor, index) => {
        return (
          <div>
            {/* <img
              src={getImage(actor.profile_path)}
              alt=""
              style={{ width: "200px" }}
            />
            <h1>{actor.name}</h1> */}

            {/* <p>{actor.profile_path}</p> */}
            <ActorCard actor={actor} />
          </div>
        )
      })}
    </div>
  )
}
