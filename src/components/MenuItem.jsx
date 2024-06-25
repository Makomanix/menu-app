import { useContext } from "react"

import { CartContext } from "../Store/CartContextProvider"

export default function MenuItem({
  name,
  price,
  description,
  image
}) {
  const { items, addItemToCart, updateItemQuantity} = useContext(CartContext)

  const itemButtons = items.indexOf(name) ?
    (<div>
      <button>Subtract</button>
      <p>#</p>
      <button>Add</button>
    </div>) 
    :
    <button className="meal-item-actions button">Add to Cart</button> 


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
