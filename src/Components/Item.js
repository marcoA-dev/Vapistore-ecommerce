import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <img src={product.image} />
        <li>{product.name}</li>
    </div>
  )
}

export default Item