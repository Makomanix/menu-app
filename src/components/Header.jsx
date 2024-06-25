import { useContext, useRef } from 'react'

import logo from '../assets/logo.jpg'
import CartModal from './CartModal'

export default function Header() {

  // const modal = useRef();

  let modalActions = <button>Close</button>

  return (
    <>
      {/* <CartModal 
        ref={modal}
        title='Your Cart'
        actions={modalActions}
      /> */}
      <header className='main-header'>
        <div className='title'>
          <img src={logo}/>
          <h1>REACTFOOD</h1>
        </div>
        <button className='button'>Cart (#)</button>
      </header>
    </>
  )
}