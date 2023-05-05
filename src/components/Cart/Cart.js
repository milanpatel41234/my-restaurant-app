import React from "react";
import style from './Cart.module.css'

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
    <div>
      {cartitem}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>450</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
