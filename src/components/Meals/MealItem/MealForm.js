import React from 'react'
import Input from '../../store/Input'
import style from './MealForm.module.css'


function MealForm(props) {
  
  return (
   <form onSubmit={props.onSubmit} className={style.form}>
    <Input input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '9',
        step: '1',
        value: props.value,
        onChange:props.onChange
    }}/>
    {!props.onValid && <p className={style.warn}>Enter valid input (1-9)</p>}
    <button value='Submit'>+ Add</button>
   </form>
  )
}

export default MealForm
