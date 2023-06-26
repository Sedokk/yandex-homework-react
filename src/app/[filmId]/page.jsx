import style from "./page.module.scss"
import Comment from "@/components/commentCard/Comment"
import FilmInfo from "@/components/filmBigCard/FilmInfo"

export async function generateMetadata({ params: { filmId } }) {
  console.log("meta")
  const film = await fetch(
    `http://localhost:3001/api/movie?movieId=${filmId}`
  ).then((res) => res.json())
  return {
    title: film.title,
  }
}

async function Film({ params: { filmId } }) {
  const film = fetch(`http://localhost:3001/api/movie?movieId=${filmId}`).then(
    (res) => res.json()
  )
  const comments = fetch(
    `http://localhost:3001/api/reviews?movieId=${filmId}`
  ).then((res) => res.json())

  const [filmData, commentsData] = await Promise.all([film, comments])

  return (
    <div className={style.wrapper}>
      <FilmInfo film={filmData} />
      {commentsData.map((comm) => (
        <Comment key={comm.id} data={comm} />
      ))}
    </div>
  )
}

export default Film
