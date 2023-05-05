import React , {Fragment} from 'react'
import style from './Header.module.css'
import img from '../Image/food.png'
import HeaderCart from './HeaderCart'

function Header() {
  return (
    <Fragment>
      <header className={style.header}>
        <h2>Your-Meals</h2>
       <HeaderCart/>
      </header>
      <div className={style.image}>
        <img src={img} alt='Our food images'/>
      </div>
    <div >
      
    

    </div>
    </Fragment>
  )
}

export default Header
