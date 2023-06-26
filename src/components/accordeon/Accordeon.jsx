"use client"

import React, { useRef, useLayoutEffect } from "react"
import Image from "next/image"
import style from "./Accordeon.module.scss"
import arrowPic from "@/icons/arrow.svg"

const Accordeon = ({
  data: { question, answer },
  state: { open, setOpen },
}) => {
  const accordeonRef = useRef(null)
  useLayoutEffect(() => {
    if (open === question)
      accordeonRef.current.style.maxHeight =
        accordeonRef.current.scrollHeight + "px"
    else accordeonRef.current.style.maxHeight = 0
  }, [open, question])
  return (
    <div className={style.accordeonWrapper}>
      <button
        className={style.accordeon}
        onClick={() => setOpen((prev) => (prev === question ? null : question))}
      >
        <h4>{question}</h4>
        <div>
          <Image
            className={open === question ? style.active : null}
            src={arrowPic}
            alt='Arrow icon'
            width={32}
            height={32}
          />
        </div>
      </button>
      <div ref={accordeonRef} className={style.text}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Accordeon
