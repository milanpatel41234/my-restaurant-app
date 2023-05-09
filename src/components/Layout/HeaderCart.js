import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import style from './HeaderCart.module.css'
import CartContext from '../store/Cart-Context'

function HeaderCart(props) {
    const cartctx = useContext(CartContext);
    const cartitems = cartctx.items.reduce((curNum, item)=>{
        return (curNum + Number.parseInt(item.amount))
    }, 0)
  return (
   <button className={style.button} onClick={props.ShowCart}>
    <span className={style.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={style.badge}>{cartitems}</span>
   </button>
  )
}

export default HeaderCart
