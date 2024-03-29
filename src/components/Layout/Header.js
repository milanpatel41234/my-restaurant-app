import React , {Fragment} from 'react'
import style from './Header.module.css'
import img from '../Image/food.png'
import HeaderCart from './HeaderCart'

function Header(props) {
  return (
    <Fragment>
      <header className={style.header}>
        <h2>Your-Meals</h2>
       <HeaderCart items={props.items}  ShowCart={props.ShowCart}/>
      </header>
      <div className={style.image}>
        <img src={img} alt='Our food images'/>
      </div>
  
    </Fragment>
  )
}

export default Header
