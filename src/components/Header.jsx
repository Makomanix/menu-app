import { useContext, useRef } from 'react'

import logo from '../assets/logo.jpg'
import Modal from './Modal'
import { CartContext } from '../Store/CartContextProvider';

export default function Header() {
  const modal = useRef();
  const { totalCount, isCartActive } = useContext(CartContext)

  function handleOpenModal() {
    modal.current.open();
  }

  const modalTitle = isCartActive ? "Your Cart" : "Checkout";

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