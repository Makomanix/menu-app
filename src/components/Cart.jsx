import { useContext } from "react"
import { CartContext } from "../Store/CartContextProvider"
import CartItem from "./CartItem";

export default function Cart({actions}) {
  const { cartItems, totalPrice} = useContext(CartContext);

  const mealsInCart = 
  <div className="cart">
    <ul>
      {cartItems.map((cartItem) => (
        <li key={cartItem.id} >
          <CartItem meal={cartItem}/>
        </li>
      ))}
    </ul>
  </div>

  return (
    <>
      {mealsInCart}
      <p>Total ${totalPrice}</p>
      {actions}
    </>
  )
}