import { useState, createContext } from 'react'

export const CartContext = createContext({
  cartItems: [],
  totalPrice: '',
  totalCount: '',
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  toggleCartActive: () => {},
});

export default function CartContextProvider({children}) {
  const [ cart, setCart ] = useState([]);
  const [ isCartActive, setIsCartActive ] = useState(true);

  function handleAddItemToCart(meal) {
    setCart(prevCart => {
      return [...prevCart, meal]
    });
  }

  console.log(cart.length);

  const totalCartCount = cart.length === 0 ? '0' : cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  const totalCartPrice = cart.length === 0 ? '0' : cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0)

  console.log(totalCartPrice);

  function handleToggleCartCheckout() {
    setIsCartActive(prevState => !prevState)
  }

  function handleUpdateItemQuantity(id, value) {
    setCart(prevCart => {

      let updatedItems = [...prevCart]

      const mealIndex = updatedItems.findIndex(item => item.id === id)
      
      const updatedItem = { ...updatedItems[mealIndex] };
      updatedItem.quantity += value;
        
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
    totalPrice: totalCartPrice,
    totalCount: totalCartCount,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQuantity,
    toggleCartActive: handleToggleCartCheckout,
    isCartActive: isCartActive
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}