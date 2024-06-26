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
      console.log(meal)
      return [...prevCart, meal]
    });
  }

  function handleUpdateItemQuantity(id, value) {
    setCart(prevCart => {

      let updatedItems = [...prevCart]

      const mealIndex = updatedItems.findIndex(item => item.id === id)
      console.log(mealIndex);
      
      const updatedItem = { ...updatedItems[mealIndex] };
      updatedItem.quantity += value;
      console.log(updatedItem);
        
      if (updatedItem.quantity <= 0) {
        updatedItems = updatedItems.filter(item => item.id !== id)
      } else {
        updatedItems[mealIndex] = updatedItem;
      }
      return updatedItems
    })
  }

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