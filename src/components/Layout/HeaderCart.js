import React from 'react'
import CartIcon from '../Cart/CartIcon'
import style from './HeaderCart.module.css'

function HeaderCart() {
  return (
   <button className={style.button}>
    <span className={style.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={style.badge}>3</span>
   </button>
  )
}

export default HeaderCart
