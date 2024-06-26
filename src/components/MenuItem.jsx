import { useContext } from "react"

import { CartContext } from "../Store/CartContextProvider"


export default function MenuItem({ meal }) {
  const { id, name, price, description, image, quantity } = meal;
  const { cartItems, addItemToCart, updateItemQuantity} = useContext(CartContext);

  const itemInCart = cartItems.find((item) => item.id === meal.id)

  function findItemInCart(meal, value){
    if (itemInCart) {
      updateItemQuantity(meal.id, value)
    } else {
      meal.quantity = 1;
      addItemToCart(meal);
    }
  } 

  const itemButtons = itemInCart ?
  (<div className="meal-item-counter">
    <button onClick={() => findItemInCart(meal, -1)}>-</button>
    <p>{itemInCart.quantity}</p>
    <button onClick={() => findItemInCart(meal, 1)}>+</button>
  </div>) 
    :
    <div className="meal-item-actions">
      <button className='button' onClick={() => findItemInCart(meal)}>Add to Cart</button>
    </div> 


  return (
    <article>
      <img src={`backend/public/${image}`} alt={name}/>
      <h3>{name}</h3>
      <div>
        <p className="meal-item-price">{price}</p>
        <p className="meal-item-description">{description}</p>
        {itemButtons}
      </div>
    </article>
  )
}
