import React from 'react'
import { useNavigate } from 'react-router-dom';
import  "../Styles/Productos.css";



const Item = ({ product }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/item/${product.id}`)
  }

  return (
    <div className="card productos ">
      <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.descripcion}</p>
          <button className='btn btn-primary' onClick={handleNavigate}>Go somewhere</button>
        </div>
    </div>
  )
}

export default Item