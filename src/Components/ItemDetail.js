import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";
import ItemCount from "../Components/ItemCount";
import "../Styles/ItemDetail.css";
import Swal from "sweetalert2";

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
      <div className="card mb-3 cardDetail ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.descripcion}</p>
              <span>
                price: <strong>${item.price}</strong>
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
                    disabled={currentStock === 0}
                  >
                    Agregar al carrito
                  </button>
                  <button
                    disabled={!isInCart(item.id)}
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

export default ItemDetail;
