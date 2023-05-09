import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './components/store/CartProvider';

function App() {
  const [CartState, setCartState] = useState(false);

const ChangeCartState=()=>{
setCartState(true)
}
const HideCart=()=>{
setCartState(false)
}

  return (
    <div className="App">
      <CartProvider>
      {CartState && <Cart onClose={HideCart}/>}
     <Header ShowCart={ChangeCartState}/>
     <main>
      <Meals/>
     </main>
     </CartProvider>
    </div>
  );
}

export default App;
