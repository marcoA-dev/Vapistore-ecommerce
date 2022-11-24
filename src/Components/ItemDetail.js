import React from 'react'
import "../Styles/ItemDetail.css";
// import Swal from 'sweetalert2'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  ItemCount  from "../Components/ItemCount";


const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;


  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
  }

  function handleCheckout() {
    navigate("/cart");
  }

  
  // const onAdd = (counter) =>{
  //   Swal.fire(
  //    'Good job!',
  //    `Se Agregaron exitosamente ${counter} unidades al Carrito`,
  //    'success'
  //  )
  // }


  return (
    <>
      <div className="card mb-3 cardDetail " >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.descripcion}</p>
              <span>
                price: <strong>${item.precio}</strong>
              </span>
              {currentStock > 0 && (
                <p className="text-sm">In Stock: {currentStock}</p>
              )}
               <div className="flex flex-col flex-1 items-center">
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
          )}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={handleAdd}
              className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
              disabled={currentStock === 0}>
              Agregar al carrito
            </button>
            <button
              onClick={handleCheckout}
              className="w-4/5 bg-gray-800 text-black px-4 py-2 mt-2 rounded"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};


export default ItemDetail