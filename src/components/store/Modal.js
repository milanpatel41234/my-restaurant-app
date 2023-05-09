import React from 'react'
import style from './Modal.module.css'
import  ReactDOM from 'react-dom'

const Backdrop = (props)=>{
  return <div onClick={props.onClick} className={style.backdrop}></div>
}
const ModalOverLay = (props)=>{
  return <div className={style.modal}>
    <div className={style.content}>{props.children}</div>
  </div>
}
const Element = document.getElementById('OverLay');

function Modal(props) {
  return (
    <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onClick={props.backdropclick}/> , Element)}
     {ReactDOM.createPortal( <ModalOverLay>{props.children}</ModalOverLay> , Element)}
   </React.Fragment>
  )
}

export default Modal
