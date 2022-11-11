/* eslint-disable no-template-curly-in-string */
import React from 'react'
import ItemCount from './ItemCount'
import Swal from 'sweetalert2';

const ItemListContainer = ({greeting}) => {

  const onAdd = (quantity) =>{
    Swal.fire(
      'Good job!',
      `Se Agregaron exitosamente ${quantity} unidades al Carrito`,
      'success'
    )
  }

  return (
    <>
    {greeting}
    <ItemCount initial ={1} stock={5} onAdd={onAdd}></ItemCount>
    </>
    
  )
}

export default ItemListContainer