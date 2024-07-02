import { useContext, useRef } from 'react'

import logo from '../assets/logo.jpg'
import Modal from './Modal'
import { CartContext } from '../Store/CartContextProvider';

export default function Header() {
  const modal = useRef();
  const { totalCount, isCartActive, isOrdered } = useContext(CartContext)

  function handleOpenModal() {
    modal.current.open();
  }

  let modalTitle; 
  
  if (isCartActive && !isOrdered) {
    modalTitle = "Your Cart"
  } else if (!isCartActive && !isOrdered){
    modalTitle = "Checkout"
  } else if ( isOrdered ){
    modalTitle = "Confirmation"
  }

  console.log(modalTitle);
  return (
    <>
    <Modal ref={modal} title={modalTitle}/>
      <header className='main-header'>
        <div className='title'>
          <img src={logo}/>
          <h1>REACTFOOD</h1>
        </div>
        <button className='button' onClick={handleOpenModal}>Cart({totalCount})</button>
      </header>
    </>
  )
}