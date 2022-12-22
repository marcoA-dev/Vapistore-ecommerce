import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Trash from "../assets/trash.png";

import "../Styles/TrashWidget.css"

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="trashBtn"
    >
    <img
    className="trashIcon"
    src={Trash}
    alt=""
    >
    </img>
    </button>
  );
};