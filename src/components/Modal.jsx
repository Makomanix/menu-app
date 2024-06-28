import { forwardRef, useImperativeHandle, useRef, useContext } from "react"
import { createPortal } from "react-dom"
import Checkout from "./Checkout"
import Cart from "./Cart"
import { CartContext } from "../Store/CartContextProvider"

const Modal = forwardRef(function Modal( {title, checkout},
  ref
) {
  const dialog = useRef();
  const {toggleCartActive, isCartActive} = useContext(CartContext)

  let actions;

  console.log(isCartActive);


  if (isCartActive ) {
    actions = (
      <>
        <button>Close</button>
      </>
    ) 
  }

  function onPost(){
    toggleCartActive();
    onClose();
  }

  function onClose(){
    dialog.current.close();
  }

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal()
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog} >
      <h2>{title}</h2>
      { isCartActive ?
      <>
        <button onClick={onClose}>Close</button>
        <button onClick={toggleCartActive}>Checkout</button>
      </>
      :
      <>
        <button onClick={toggleCartActive}>Back</button>
        <button onClick={onPost}>Submit</button>
      </>}
    </dialog>,
    document.getElementById('modal')
  )
})

export default Modal;