import { getImage } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import ActorCard from "./[Actorsid]"

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/popular?api_key=da3c06c669cc47bf0856ca78b85cfe7c",
  )
  const data = await res.json()
  return {
    props: { Actors: data.results },
  }
}

const actors = ({ Actors }) => {
  return (
    <Link href={`/actors/${Actors.id}`}>
      <h1
        style={{ fontSize: "30px", alignItems: "center", fontWeight: "bold" }}
      >
        Actor list{" "}
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        {Actors.map((Actor) => (
          <div key={Actor.id}>
            <h1
              style={{
                fontSize: "20px",
                alignItems: "center",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {Actor.name}
            </h1>
            <Image
              src={getImage(Actor.profile_path)}
              alt={Actor.title}
              width={250}
              height={0}
            />
          </div>
        ))}
      </div>
    </Link>
  )
}
export default actors
