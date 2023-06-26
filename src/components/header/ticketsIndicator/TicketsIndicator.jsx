"use client"

import style from "./TicketsIndicator.module.scss"
import { useCart } from "@/store"

function TicketsIndicator() {
  const amount = useCart((s) => s.totalTickets)
  return (
    Boolean(amount) && <div className={style.ticketsIndicator}>{amount}</div>
  )
}

export default TicketsIndicator
