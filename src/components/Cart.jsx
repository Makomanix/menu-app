import { useContext } from "react"
import { CartContext } from "../Store/CartContextProvider"
import CartItem from "./CartItem";

export default function Cart({actions}) {
  const { cartItems, totalPrice} = useContext(CartContext);

  const mealsInCart = <ul className="">
    {cartItems.map((cartItem) => (
      <li key={cartItem.id} className="">
        <CartItem meal={cartItem}/>
      </li>
    ))}
  </ul>

  return (
    <div>
      {mealsInCart}
      <p>Total {totalPrice}</p>
      {actions}
    </div>
  )
}