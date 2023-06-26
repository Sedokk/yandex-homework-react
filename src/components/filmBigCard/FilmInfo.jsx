import Image from "next/image"
import Counter from "@/components/card/counter/Counter"
import { getGenre } from "@/utils"

import style from "./FilmInfo.module.scss"

function FilmInfo({ film }) {
  if (!film) return <div className={style.filmInfo}>Loading...</div>
  return (
    <div className={style.filmInfo}>
      <div>
        <Image
          src={film?.posterUrl}
          alt='film poster'
          className={style.poster}
          width={400}
          height={500}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={style.textBlock}>
        <div className={style.textTop}>
          <h2 className={style.title}>{film?.title}</h2>
          <Counter id={film?.id} />
        </div>
        <div className={style.parametres}>
          <p className={style.parametresElem}>
            <span className={style.parametreName}>Жанр: </span>
            <span className={style.parametreValue}>
              {getGenre(film?.genre)}
            </span>
          </p>
          <p className={style.parametresElem}>
            <span className={style.parametreName}>Год выпуска: </span>
            <span className={style.parametreValue}>{film?.releaseYear}</span>
          </p>
          <p className={style.parametresElem}>
            <span className={style.parametreName}>Рейтинг: </span>
            <span className={style.parametreValue}>{film?.rating}</span>
          </p>
          <p className={style.parametresElem}>
            <span className={style.parametreName}>Режиссёр: </span>
            <span className={style.parametreValue}>{film?.director}</span>
          </p>
        </div>
        <div className={style.descriptionBlock}>
          <span className={style.descriptionSign}>Описание</span>
          <p className={style.description}>{film?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FilmInfo
