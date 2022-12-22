import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

//importacion de Estilos y imagenes
import Carrito from "../assets/carrito.png"
import "../Styles/Carrito.css";

const CartWidget = () => {
  const {itemsCounter} = useContext(CartContext)

  return (
    <div className="">
      <Link to="/cart" className="relative">
        <button
          type="button"
          className="BotonCarrito "
        >
         <img
         src={Carrito}
         alt=""
         >
         </img>
         <div className="productsNumber">{itemsCounter() > 0 && (
            <span>
                {itemsCounter()}
            </span>
        )}</div>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
