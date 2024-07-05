import logoImg from '../assets/logo.jpg'
import CartContext from '../assets/store/CartContext'
import UserProgressContext from '../assets/store/UserProgressContext';
import Button from './UI/Button'
import { useContext } from 'react'

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalCartItems, item) => {
    return totalCartItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
  <header id="main-header">
      <div id="title">
        <img src={logoImg} alt='A restaurant'/>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
  </header>
  )
}