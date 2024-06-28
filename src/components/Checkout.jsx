import { useContext } from "react"
import { CartContext } from "../Store/CartContextProvider"

export default function Checkout() {
  const { totalPrice, onUserChange, cartUser } = useContext(CartContext);
  
  return (
    <>
      <h3>Total Amount: {totalPrice}</h3>
      <form>
        <label >
          <input type="text" name='name' placeholder="Full Name" className="" onChange={() => onUserChange(e.target)} value={cartUser.name}/>
        </label>
        <label >
          <input type="email" name='email' placeholder="email" className="" onChange={() => onUserChange(e.target)} value={cartUser.email}/>
        </label>
        <label >
          <input type="text" name='street' placeholder="Street" className="" onChange={() => onUserChange(e.target)} value={cartUser.street}/>
        </label>
        <label >
          <input type="text" name='city' placeholder="City" className="" onChange={() => onUserChange(e.target)} value={cartUser.city}/>
        </label>
        <label >
          <input type="text" name='postal' placeholder="Postal Code" className="" onChange={() => onUserChange(e.target)} value={cartUser.postal}/>
        </label>
      </form>
    </>
  )
}