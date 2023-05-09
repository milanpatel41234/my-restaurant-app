import React, {  useContext, useState } from 'react'
import style from './MealItem.module.css'
import MealForm from './MealForm'
import CartContext from '../../store/Cart-Context';

function MealItem(props) {
const Price = `Rs ${props.price.toFixed(2)}`
const [Amount, setAmount] = useState(1);

const ChangeAmount=(e)=>{
  setAmount(e.target.value)
}
const ctx = useContext(CartContext)
const HandleSubmit =(e)=>{
  e.preventDefault()
  if (+Amount > 0) {
    const item = {
      name:props.name,
      price:props.price,
      id:props.id,
      amount:Number.parseInt(Amount),
    }
    ctx.addItem(item)
   
  } 
}

  return (
      <li className={style.meal}>
        <div>
     <h3>{props.name}</h3>
     <div className={style.discription}>{props.discription}</div>
     <div className={style.price}>{Price}</div>
     </div>
     <div><MealForm value={Amount} onChange={ChangeAmount} onSubmit={HandleSubmit}/></div>
      </li>

  )
}

export default MealItem
