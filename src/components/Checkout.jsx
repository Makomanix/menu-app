import { useContext } from "react"
import { CartContext } from "../Store/CartContextProvider"

export default function Checkout() {
  const { totalPrice } = useContext(CartContext);
  
  return (
    <>
      <h3>Total Amount: {totalPrice}</h3>
      <form>
        <label >
          <input type="text" placeholder="Name" className=""/>
        </label>
        <label >
          <input type="email" placeholder="email" className=""/>
        </label>
        <label >
          <input type="text" placeholder="Street" className=""/>
        </label>
        <label >
          <input type="text" placeholder="City" className=""/>
        </label>
        <label >
          <input type="text" placeholder="Postal Code" className=""/>
        </label>
      </form>
    </>
  )
}