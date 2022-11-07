import React from 'react'
import {BiCartAlt} from "react-icons/bi";
import "../Styles/Carrito.css"


const CartWidget = () => {
  return (
    <div>
        <button className='BotonCarrito'><BiCartAlt></BiCartAlt></button>
    </div>
  )
}

export default CartWidget