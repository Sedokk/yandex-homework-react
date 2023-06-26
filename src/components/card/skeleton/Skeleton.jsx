import classNames from "classnames"
import style from "./Skeleton.module.scss"

function Skeleton() {
  return (
    <div className={style.card}>
      <div className={classNames(style.img, style.grey)}></div>
      <div className={style.text}>
        <div className={classNames(style.title, style.grey)}></div>
        <div className={classNames(style.genre, style.grey)}></div>
      </div>
      <div className={classNames(style.counter, style.grey)}></div>
    </div>
  )
}

export default Skeleton
