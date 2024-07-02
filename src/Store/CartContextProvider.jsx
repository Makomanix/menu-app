import { useState, createContext } from 'react'

export const CartContext = createContext({
  cartItems: [],
  totalPrice: '',
  totalCount: '',
  cartUser: {},
  isOrdered: '',
  onUserChange: () => {},
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  toggleCartActive: () => {},
  handleOrdered: () => {}
});

export default function CartContextProvider({children}) {
  const [ cart, setCart ] = useState([]);
  const [ isCartActive, setIsCartActive ] = useState(true);
  const [ isOrdered, setIsOrdered] = useState(false)
  const [ cartUser, setCartUser ] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    postal: '',
  })

  function handleOrdered() {
    setIsOrdered(prevOrder => !prevOrder);
    setCart([]);
  }

  console.log(isOrdered);

  function handleAddItemToCart(meal) {
    setCart(prevCart => {
      return [...prevCart, meal]
    });
  }

  function handleUserChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setCartUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const totalCartCount = cart.length === 0 ? '0' : cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  const totalCartPrice = cart.length === 0 ? '0' : cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0)

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
    isCartActive: isCartActive,
    cartUser: cartUser,
    isOrdered: isOrdered,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQuantity,
    toggleCartActive: handleToggleCartCheckout,
    onUserChange: handleUserChange,
    handleOrdered: handleOrdered
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}