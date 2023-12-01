import { getImage } from "@/lib/utils"
import Image from "next/image"

const Card = ({ category }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg m-3 w-[180px] relative">
      <Image
        src={getImage(category.poster_path)}
        alt={category.title}
        width={200}
        height={0}
      />
      <div>
        <h1 className="text-sm px-2 py-1 truncate absolute bottom-0 text-center w-full opacity bg-black bg-opacity-50">
          {category.title}
        </h1>
      </div>
    </div>
  )
}

export default Card
