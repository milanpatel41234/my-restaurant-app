import CartContext from "./Cart-Context"
import { useReducer } from "react";

const DefaultCartState = {
  items:[] ,
  totalAmount:0 ,
};
const CartReduser = (state,action)=>{
if(action.type === 'ADD'){
  const updateamount = state.totalAmount + action.item.price * action.item.amount ;
 const ItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
 let updateitems;
  if(ItemIndex > -1){
  const existingitem = {
    ...state.items[ItemIndex],
   amount:state.items[ItemIndex].amount + action.item.amount
  }
  const Olditems = [...state.items];
  Olditems[ItemIndex] = existingitem ;
  updateitems = Olditems
  } else{
   updateitems = state.items.concat(action.item);
  }
  return  {
    items: updateitems ,
    totalAmount: updateamount ,
  };
} else if(action.type === 'REMOVE'){
 
  const ItemIndex = state.items.findIndex((item)=> item.id === action.id);
  const citem = state.items[ItemIndex];
  let updateitems;
  if(citem.amount > 1){
    const existingitem = {
      ...state.items[ItemIndex],
     amount: citem.amount -1
    }
    const Olditems = [...state.items];
    Olditems[ItemIndex] = existingitem ;
    updateitems = Olditems
  }else{
   updateitems = state.items.filter((item)=>{ return action.id !== item.id })}
   const updateamount = state.totalAmount - citem.price ;
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

