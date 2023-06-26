"use client"

import { useData, useFilters } from "@/store"
import FilmCard from "../card/FilmCard"
import style from "./Films.module.scss"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"
import Skeleton from "../card/skeleton/Skeleton"

function Films() {
  const [films, getFilms] = useData((s) => [s.films, s.getFilms])
  const [cinemaFilms, setCinemaFilms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [title, genre, cinema, getFilmsOfCinema] = useFilters(
    (s) => [s.nameFilter, s.genreFilter, s.cinemaFilter, s.getFilmsOfCinema],
    shallow
  )

  const filterFunc = (film) => {
    if (
      title !== "" &&
      film.title.toUpperCase().indexOf(title.toUpperCase()) < 0
    )
      return
    if (genre !== "default" && film.genre !== genre) return
    if (cinema !== null && !cinemaFilms.find((e) => e.id === film.id)) return
    return film
  }

  useEffect(() => {
    getFilms()
  }, [getFilms])

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const films = await getFilmsOfCinema()
      setCinemaFilms(films)
      setIsLoading(false)
    })()
  }, [cinema, getFilmsOfCinema])

  const filtered = films.filter(filterFunc)

  return (
    <div className={style.filmsContainer}>
      {Boolean(filtered.length) && !isLoading ? (
        filtered.map((film) => <FilmCard id={film.id} key={film.id} />)
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </div>
  )
}

export default Films
