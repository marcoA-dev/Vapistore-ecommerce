import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <ul>
      {products.map(product => (
      <Item product={product}></Item>
      ))}
    </ul>
  )
}

export default ItemList