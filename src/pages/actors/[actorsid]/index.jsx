import React from "react"

export default async function detailspage({ params }) {

  ///need to fecth data////
  const actorId = params.postid
  const res = await fetch(`/actors/${actorId}`, {
    next: {
      revalidate: 120,
    },
  })
  const actor = await res.json()

  return (
    <div>
      <h1>Actors details</h1>
      <h3>{actor.title}</h3>
    </div>
  )
}
