import { useContext } from "react"
import Modal from "./UI/Modal.jsx"
import CartContext from "../assets/store/CartContext.jsx"
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../assets/store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + (item.quantity * item.price);
  }, 0)

  function handleCloseCart(){
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
    <h2>Your Cart</h2>
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem 
          key={item.id} 
          item={item} 
          onDecrease={() => cartCtx.removeItem(item.id)} 
          onIncrease={() => cartCtx.addItem(item)}/>
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={handleCloseCart}>Close</Button>
      <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
    </p>
  </Modal>
};