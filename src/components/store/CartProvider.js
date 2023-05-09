import CartContext from "./Cart-Context"
import { useReducer } from "react";

const DefaultCartState = {
  items:[] ,
  totalAmount:0 ,
};
const CartReduser = (state,action)=>{
if(action.type === 'ADD'){
  const updateitems = state.items.concat(action.item);
  const updateamount = state.totalAmount + action.item.price * action.item.amount ;
  return  {
    items: updateitems ,
    totalAmount: updateamount ,
  };
} else if(action.type === 'REMOVE'){
  const updateitems = state.items.filter((item)=>{ return action.id !== item.id })
  const updateamount = state.totalAmount - action.items.price * action.items.amount ;
  return  {
    items: updateitems ,
    totalAmount: updateamount ,
  };
} 
  return DefaultCartState;
};

function CartProvider(props) {
const [cartstate , dispatchaction] = useReducer(CartReduser, DefaultCartState);

    const AddItem = (item) => {
      dispatchaction({type: 'ADD', item:item})
    };
    const RemoveItem = (id) => {
      dispatchaction({type: 'REMOVE', id:id})
    };

    const cartContext = {
        items: cartstate.items,
        totalAmount:cartstate.totalAmount ,
        addItem: AddItem,
        removeItem: RemoveItem
       }
  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartProvider

