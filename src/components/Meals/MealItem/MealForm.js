import React from 'react'
import Input from '../../store/Input'
import style from './MealForm.module.css'


function MealForm() {
  
  return (
   <form className={style.form}>
    <Input input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}/>
    <button>+ Add</button>
   </form>
  )
}

export default MealForm
