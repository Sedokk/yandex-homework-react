"use client"
import Portal from "@/components/portal/Portal"
import style from "./Select.module.scss"
import Image from "next/image"
import arrow from "@/icons/arrowSmall.svg"
import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import classNames from "classnames"
import { useFilters } from "@/store"

const SelectContext = createContext(null)

function Option({ data: { name, value } }) {
  const setFilter = useFilters((s) => s.setFilter)
  const { filterName, setOpen, setTitle } = useContext(SelectContext)
  return (
    <div
      onClick={() => {
        setFilter(filterName, value)
        setOpen(false)
        setTitle(name)
      }}
      className={style.option}
    >
      {name}
    </div>
  )
}

function Options() {
  const optionsRef = useRef(null)
  const { refer, options, setOpen } = useContext(SelectContext)

  useLayoutEffect(() => {
    const clientCoords = refer.current.getBoundingClientRect()
    const bottom = clientCoords.bottom + window.scrollY + "px"
    const left = clientCoords.left + window.scrollX + "px"

    optionsRef.current.style.top = bottom
    optionsRef.current.style.left = left
    optionsRef.current.style.width = clientCoords.width + 2 + "px"
  }, [refer])

  return (
    <Portal>
      <div ref={optionsRef} className={style.optionsContainer}>
        {options.map((opt, ind) => (
          <Option key={ind} data={opt} />
        ))}
      </div>
    </Portal>
  )
}

function Select({ name = "Селект", options, filterName }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("Не выбрано")
  const selectRef = useRef(null)
  return (
    <SelectContext.Provider
      value={{
        setOpen,
        setTitle,
        selectRef,
        options,
        filterName,
        refer: selectRef,
      }}
    >
      <div className={style.selectWrapper}>
        <span className={style.name}>{name}</span>
        <button
          ref={selectRef}
          className={classNames(style.btn, open ? style.active : "")}
          onClick={() => setOpen(!open)}
        >
          <span className={style.title}>{title}</span>
          <div>
            <Image width={20} height={20} src={arrow} alt='arrow' />
          </div>
        </button>
        {open && <Options />}
      </div>
    </SelectContext.Provider>
  )
}

export default Select
