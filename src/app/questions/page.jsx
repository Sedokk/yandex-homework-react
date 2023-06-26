"use client"
import Accordeon from "@/components/accordeon/Accordeon"
import style from "./page.module.scss"
import { useState } from "react"

const questions = [
  {
    question: "Что такое Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    question: "Какой компании принадлежит Билетопоиск?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quos quae voluptatibus, eius esse maxime nulla pariatur eligendi rem porro! Architecto itaque eius iure blanditiis nulla, sed repellat voluptatibus magni.",
  },
  {
    question: "Как купить билет на Билетопоиск?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quos quae voluptatibus, eius esse maxime nulla pariatur eligendi rem porro! Architecto itaque eius iure blanditiis nulla, sed repellat voluptatibus magni.",
  },
  {
    question: "Как оставить отзыв на Билетопоиск?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quos quae voluptatibus, eius esse maxime nulla pariatur eligendi rem porro! Architecto itaque eius iure blanditiis nulla, sed repellat voluptatibus magni.",
  },
]

function Questions() {
  const [open, setOpen] = useState(null)
  return (
    <div className={style.container}>
      <h3 className={style.title}>Вопросы-ответы</h3>
      <div className={style.accordeonsWrapper}>
        {questions.map((question, ind) => (
          <Accordeon data={question} key={ind} state={{ open, setOpen }} />
        ))}
      </div>
    </div>
  )
}

export default Questions
