"use client"
import { useFilters } from "@/store"
import style from "./Input.module.scss"

function Input({ label, placeholder }) {
  const [setFilter, nameFilter] = useFilters((s) => [s.setFilter, s.nameFilter])
  return (
    <div className={style.wrapper}>
      <h5 className={style.labelName}>{label}</h5>
      <label className={style.label}>
        <input
          value={nameFilter}
          className={style.input}
          type='text'
          placeholder={placeholder}
          onInput={(ev) => setFilter("nameFilter", ev.target.value)}
        />
      </label>
    </div>
  )
}

export default Input
