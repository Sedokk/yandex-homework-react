import Link from "next/link"
import style from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={style.footer}>
      <Link className={style.link} href='/questions'>
        Вопросы-ответы
      </Link>
      <Link className={style.link} href='/about'>
        О нас
      </Link>
    </footer>
  )
}

export default Footer
