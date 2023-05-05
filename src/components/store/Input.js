import React from 'react'
import style from './Input.module.css'

function Input(props) {
  return (
    <div className={style.input}>
          <label htmlFor={props.input.id}>{props.input.id}</label>
          <input
           {...props.input}
          />
        </div>
  )
}

export default Input
