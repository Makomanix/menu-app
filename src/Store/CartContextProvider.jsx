import { useState, createContext } from 'react'

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
});

export default function CartContextProvider({children}) {
  const [ cart, setCart ] = useState([])

  function handleAddItemToCart(meal) {
    setCart(prevCart => {
      const itemInCart = prevCart.filter((cartItem) => cartItem.name === meal.name);
      console.log(itemInCart)
      if (itemInCart.length > 0) {
        console.log('what?')
        handleUpdateItemQuantity(meal.id, 1)
        return;
      }
      return [...prevCart, meal]
    });
  }

  function handleUpdateItemQuantity(id, value) {
    console.log('meal updated', id, value)
  }
  console.log(cart);

  const ctxValue = {
    cartItems: cart,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}