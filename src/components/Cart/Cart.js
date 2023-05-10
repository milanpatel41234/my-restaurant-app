import React, { useContext } from "react";
import style from './Cart.module.css'
import Modal from "../store/Modal"
import CartContext from "../store/Cart-Context";

function Cart(props) {
  const ctx = useContext(CartContext)
  const AddItem =(item)=>{
      const newitem = {
        name:item.name,
        price:item.price,
        id:item.id,
        amount: 1,
      }
      ctx.addItem(newitem)
  }
  const RemoveItem =(item)=>{
     ctx.removeItem(item.id)
  }
 
  const cartitem = (
    <ul className={style.cart_items}>
      {ctx.items.map((item) => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <span className={style.price}>{`Rs ${item.price}`}</span>
          <span className={style.no}> * {item.amount}</span>
          <button className={style.pbtn} onClick={AddItem.bind(null,item)}>+</button>
          <button className={style.mbtn} onClick={RemoveItem.bind(null,item)}>-</button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal backdropclick={props.onClose}>
      {cartitem}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{`Rs ${ctx.totalAmount}`}</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt} onClick={props.onClose} >Close</button>
       {ctx.totalAmount>0 && <button className={style.button}>Order</button>}
      </div>
      </Modal>
  );
}

export default Cart;
