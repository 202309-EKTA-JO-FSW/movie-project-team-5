import { getImage } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const ActorCard = ({ actor }) => {
  const actorsid = actor.id
  return (
    // <Link href={`actors/${actorsid}`}>
    <div>
      <Image
        src={getImage(actor.profile_path)}
        alt={actor.title}
        width={200}
        height={0}
        priority={true}
      />
      <div>
        <h1>{actor.name}</h1>
      </div>
    </div>
    //{" "}
    // </Link>
  )
}

export default ActorCard
