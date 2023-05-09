import React, { useContext } from "react";
import style from './Cart.module.css'
import Modal from "../store/Modal"
import CartContext from "../store/Cart-Context";

function Cart(props) {
  const ctx = useContext(CartContext)
 
 
  const cartitem = (
    <ul className={style.cart_items}>
      {ctx.items.map((item) => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <span><b>{item.price}</b> * {item.amount}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal backdropclick={props.onClose}>
      {cartitem}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt} onClick={props.onClose} >Close</button>
        <button className={style.button}>Order</button>
      </div>
      </Modal>
  );
}

export default Cart;
