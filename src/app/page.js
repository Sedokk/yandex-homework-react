import Filters from "@/components/filters/Filters"
import style from "./page.module.scss"
import Films from "@/components/films/Films"

export default function Home() {
  return (
    <div className={style.container}>
      <Filters />
      <Films />
    </div>
  )
}
