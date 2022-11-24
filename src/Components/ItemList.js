import React from 'react'
import Item from './Item.js'

const ItemList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <Item key={index} product={product}></Item>
        ))}
      </ul>
    </div>
  )
}

export default ItemList