import React from "react";
import style from './Cart.module.css'
import Modal from "../store/Modal";

function Cart() {
  const cartitem = (
    <ul className={style.cart_items}>
      {[
        {
          id: "a1",
          name: "Chole",
          price: 99.0,
          amount: 400,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartitem}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>450</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt}>Close</button>
        <button className={style.button}>Order</button>
      </div>
      </Modal>
  );
}

export default Cart;
