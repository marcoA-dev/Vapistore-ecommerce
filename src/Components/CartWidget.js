import React, { useContext } from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import "../Styles/Carrito.css";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link to="/cart" className="relative">
        <button
          type="button"
          className="BotonCarrito rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <BiCartAlt>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </BiCartAlt>
        </button>
        {count > 0 && (
          <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
