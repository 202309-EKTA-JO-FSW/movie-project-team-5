
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/popular?api_key=da3c06c669cc47bf0856ca78b85cfe7c",
  )
  const data = await res.json()
  return {
    props: { Actors: data },
  }
}

const actors = ({ Actors }) => {
  return (
    <div>
      <h1>Actor list </h1>
      {Actors.map((Actor) => (
        <div key={Actor.id}>
          <h1>{Actor.name}</h1>
        </div>
      ))}
    </div>
  )
}
export default actors;
