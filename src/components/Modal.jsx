import { forwardRef, useImperativeHandle, useRef, useContext } from "react"
import { createPortal } from "react-dom"
import { CartContext } from "../Store/CartContextProvider"

import Checkout from "./Checkout"
import Cart from "./Cart"
import Confirmation from "./Confirmation"


const Modal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();
  const { toggleCartActive, handleOrdered } = useContext(CartContext);

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
  } else if (title === 'Checkout') {
    actions = (
      <div>
        <button onClick={toggleCartActive}>Back</button>
        <button>Submit Order</button>
      </div>
    )
  } else if (title === 'Confirmation'){
    actions =(
      <div>
        <button onClick={handleOrderConfirmed}>Complete</button>
      </div>
    )
  }

  function handleOrderConfirmed(){
    toggleCartActive();
    onClose();
    handleOrdered();
  }

  function onClose(){
    dialog.current.close();
  }

  return createPortal(
    <dialog id="modal" ref={dialog} >
      <h2>{title}</h2>
      {title === 'Your Cart' && <Cart actions={actions}/>} 
      {title === 'Checkout' && <Checkout actions={actions}/>}
      {title === 'Confirmation' && <Confirmation actions={actions} />}
    </dialog>,
    document.getElementById('modal')
  )
})

export default Modal;