"use client"

import FilmCard from "@/components/card/FilmCard"

import style from "./page.module.scss"
import { useCart } from "@/store"
import CartTotal from "@/components/CartTotal/CartTotal"

function Cart() {
  const cart = useCart((s) => s.cart)
  return (
    <div className={style.wrapper}>
      {Boolean(cart.length) ? (
        <>
          <div className={style.filmsContainer}>
            {cart.map((e) => (
              <FilmCard id={e.id} key={e.id} deletable />
            ))}
          </div>
          <CartTotal />
        </>
      ) : (
        <h2 className={style.empty}>༼ つ ◕_◕ ༽つ</h2>
      )}
    </div>
  )
}

export default Cart
