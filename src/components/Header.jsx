import { useContext, useRef } from 'react'

import logo from '../assets/logo.jpg'
import Modal from './Modal'
import { CartContext } from '../Store/CartContextProvider';

export default function Header() {
  const modal = useRef();
  const { totalCount, isCartActive } = useContext(CartContext)

  function handleOpenCartClick() {
    modal.current.open()
  }

  console.log(totalCount);

  return (
    <>
    { isCartActive ?
      <Modal 
        ref={modal}
        title='Your Cart'
        checkout={handleOpenCartClick}
      /> :
      <Modal 
        ref={modal}
        title='Checkout'
      />}
      <header className='main-header'>
        <div className='title'>
          <img src={logo}/>
          <h1>REACTFOOD</h1>
        </div>
        <button className='button' onClick={handleOpenCartClick}>Cart({totalCount})</button>
      </header>
    </>
  )
}