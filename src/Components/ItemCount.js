import React from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import "../Styles/ItemCount.css";

export const ItemCount = ({ count, handleCount }) => {
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="Decrease"
          onClick={() => handleCount("minus")}
          id="decrease"
        >
          <BiMinus></BiMinus>
        </button>
        <span type="number" className="Counter">
          {count}
        </span>

        <button
          type="button"
          className="Increase"
          onClick={() => handleCount("plus")}
        >
          <BiPlus></BiPlus>
        </button>
      </div>
    </>
  );
};

export default ItemCount;
