import { forwardRef, useImperativeHandle, useRef, useContext } from "react"
import { createPortal } from "react-dom"
import Checkout from "./Checkout"
import Cart from "./Cart"
import { CartContext } from "../Store/CartContextProvider"

const Modal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();
  const { toggleCartActive } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  let actions;

  if ( title === 'Your Cart' ) {
    actions = ( 
        <div>
          <button onClick={onClose}>Close</button>
          <button onClick={toggleCartActive}>Checkout</button>
        </div>
    ) 
  } else {
    actions = (
      <div>
        <button onClick={toggleCartActive}>Back</button>
        <button onClick={onPost}>Submit Order</button>
      </div>
    )
  }

  function onPost(){
    toggleCartActive();
    onClose();
  }

  function onClose(){
    dialog.current.close();
  }

  console.log(actions)

  return createPortal(
    <dialog id="modal" ref={dialog} >
      <h2>{title}</h2>
      {title === 'Your Cart' ? <Cart /> : <Checkout />}
      {actions}
    </dialog>,
    document.getElementById('modal')
  )
})

export default Modal;