import { useCart } from "@/store"
import style from "./CartTotal.module.scss"

function CartTotal() {
  const tickets = useCart((s) => s.totalTickets)
  return (
    <div className={style.resultBlock}>
      <span className={style.cartSign}>Итого билетов:</span>
      <span className={style.ticketsAmount}>{tickets}</span>
    </div>
  )
}

export default CartTotal
