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

  function doIt() {
    toggleCartActive();
    checkout();
  }

  if ( isCartActive ) {
    actions = (
      <>
        <button>Close</button>
        {/* <button onClick={doIt}>Checkout</button> */}
      </>
    ) 
  } else {
    actions = (
      <>
        <button onClick={toggleCartActive}>Back</button>
        <button onClick={toggleCartActive}>Submit</button>
      </>
    )
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
      <form method="dialog">
        {actions}
      </form>
      { isCartActive &&
      <button onClick={toggleCartActive}>Checkout</button>}
    </dialog>,
    document.getElementById('modal')
  )
})

export default Modal;