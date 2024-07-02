import { useContext, useState } from "react"
import { CartContext } from "../Store/CartContextProvider"

export default function Checkout({actions}) {
  const { totalPrice, onUserChange, cartUser, cartItems, handleOrdered } = useContext(CartContext);

  console.log("cartItems", cartItems);

  console.log("cartUser", cartUser);

  function handleSubmit(e){
    e.preventDefault();
      fetch('http://localhost:3000/orders', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order: {
            items: cartItems,
            customer: cartUser
          }
        })
      });
      console.log('submitted')
      handleOrdered();
    }
  
  return (
    <>
      <h3>Total Amount: {totalPrice}</h3>
      <form onSubmit={handleSubmit}>
        <label >
          <input type="text" id="name" name='name' placeholder="Full Name" required className="" onChange={(e) => onUserChange(e)} value={cartUser.name}/>
        </label>
        <label >
          <input type="email" id='email' name='email' placeholder="email" required className="" onChange={(e) => onUserChange(e)} value={cartUser.email}/>
        </label>
        <label >
          <input type="text" id='street' name='street' placeholder="Street" required className="" onChange={(e) => onUserChange(e)} value={cartUser.street}/>
        </label>
        <label >
          <input type="text" id="city" name='city' placeholder="City" required className="" onChange={(e) => onUserChange(e)} value={cartUser.city}/>
        </label>
        <label >
          <input type="text" id="postal-code" name='postal' placeholder="Postal Code" maxLength={5} minLength={5} required className="" onChange={(e) => onUserChange(e)} value={cartUser.postal}/>
        </label>
        {actions}
      </form>
    </>
  )
}