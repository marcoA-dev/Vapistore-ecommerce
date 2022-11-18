import React from 'react';
import { useState ,useEffect } from 'react';
import {BiPlus} from "react-icons/bi";
import {BiMinus} from "react-icons/bi";
import "../Styles/ItemCount.css";

const ItemCount = ({initial,stock,onAdd}) => {

  const [counter , setCounter] = useState(parseInt(initial));



  const Increase = () =>{
    setCounter(counter + 1);
  }
  
  useEffect(() => {
    setCounter(parseInt(initial));
  },[initial])
  

 return (
    <>
    <div className="btn-group" role="group" aria-label="Basic example">

        <button 
        type="button" 
        className="btn btn-primary Decrease" 
        onClick={() => setCounter(counter - 1)}
        disabled={counter <=0}
        id='decrease'>
            <BiMinus></BiMinus>
        </button>

        <span 
        type="number" 
        className='Counter'>
          {counter}
        </span>

        <button 
        type="button" 
        className="btn btn-primary Increase" 
        onClick={()=> setCounter(counter + 1)}
        disabled= {counter >= stock}>
            <BiPlus></BiPlus></button>
        <button
        onClick={()=> onAdd(counter)} 
        className='AgregarCarrito'>
            Agregar al Carrito
        </button>
        
    </div>
    </>
  )
}

export default ItemCount