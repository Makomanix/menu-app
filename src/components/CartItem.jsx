import { useContext } from "react";
import { CartContext } from "../Store/CartContextProvider";

export default function CartItem({ meal }) {
  const {id, name, price, quantity } = meal;
  const { updateItemQuantity } = useContext(CartContext);

  return (
    <span>
      <p className="">{name} - {quantity}x{price}</p>
      <p className="">
        <button className="" onClick={() => updateItemQuantity(id, -1)}>-</button>
        {quantity}
        <button className="" onClick={() => updateItemQuantity(id, 1)}>+</button>
      </p>
    </span>
  )
}