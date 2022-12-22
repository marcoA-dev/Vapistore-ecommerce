import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";
import ItemCount from "../Components/ItemCount";

//importacion de Estilos
import Swal from "sweetalert2";
import "../Styles/ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      Swal.fire(
        "Good job!",
        `Se Agregaron exitosamente ${count} unidades al Carrito`,
        "success"
      );
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <>
      <div className="containerDetail">
        <div>
          <img className="productImage" src={img} alt=""></img>
        </div>
        <div className="product-details">
          <div>
            <h1 className="titleDetail">{item.name}</h1>
            <p className="information">{item.descripcion}</p>
            <div className="control">
              <span className="price">
                price: <strong>${item.price}</strong>
              </span>
              {currentStock > 0 && <p className="countDetail">In Stock: {currentStock}</p>}
              {/* Count */}
              {currentStock > 0 ? (
                <ItemCount count={count} handleCount={handleCount} />
              ) : (
                <span className="sinStockSpan">Sin stock</span>
              )}
              <div className="itemDetailButtons">
              <button
                onClick={handleAdd}
                className="agregarCarritoBtn"
                disabled={currentStock === 0}
              >
                <span>
                  Agregar Al Carrito
                </span>
              </button>
              <button
                disabled={!isInCart(item.id)}
                onClick={handleCheckout}
                className="finalizarCompraBtn"
              >
                <span>
                  Comprar
                </span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
