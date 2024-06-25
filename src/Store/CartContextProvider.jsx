import { useState, createContext } from 'react'

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
});

export default function CartContextProvider({children}) {
  const [ cart, setCart ] = useState([])

  function handleAddItemToCart(meal) {
    console.log('new meal added', meal)
  }

  function handleUpdateItemQuantity(id, value) {
    console.log('meal updated', id, value)
  }

  const ctxValue = {
    items: cart,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}