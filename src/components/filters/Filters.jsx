"use client"
import Input from "@/UI/Input/Input"
import style from "./Filters.module.scss"
import Select from "@/UI/Select/Select"
import { useFilters } from "@/store"
import { useEffect } from "react"

const genres = [
  {
    name: "Не выбрано",
    value: "default",
  },
  {
    name: "Комедия",
    value: "comedy",
  },
  {
    name: "Боевик",
    value: "action",
  },
  {
    name: "Ужасы",
    value: "horror",
  },
  {
    name: "Фэнтези",
    value: "fantasy",
  },
]

function Filters() {
  const [cinemas, getCinemas] = useFilters((s) => [
    s.cinemas.map((e) => ({ ...e, value: e.id })),
    s.getCinemas,
  ])

  useEffect(() => {
    getCinemas()
  }, [getCinemas])

  return (
    <div className={style.filtersContainer}>
      <h3 className={style.filtersTitle}>Фильтр поиска</h3>
      <div className={style.filtersBlock}>
        <Input label='Название' placeholder='Введите название' />
        <Select options={genres} name='Жанр' filterName='genreFilter' />
        <Select options={cinemas} name='Кинотеатр' filterName='cinemaFilter' />
      </div>
    </div>
  )
}

export default Filters
