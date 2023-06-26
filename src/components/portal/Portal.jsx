"use client"

import { useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

function Portal({ children }) {
  const [container] = useState(() => document.createElement("div"))

  useLayoutEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(children, container)
}

export default Portal
