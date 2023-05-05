import React from 'react'
import style from './MealItem.module.css'
import MealForm from './MealForm'

function MealItem(props) {
const Price = `Rs ${props.price.toFixed(2)}`
  return (
    
      <li className={style.meal}>
        <div>
     <h3>{props.name}</h3>
     <div className={style.discription}>{props.discription}</div>
     <div className={style.price}>{Price}</div>
     </div>
     <div><MealForm/></div>
      </li>

  )
}

export default MealItem
