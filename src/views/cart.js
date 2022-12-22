import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/carrito.png";
import Item from "../Components/Item";
import { Layout } from "../Components/Layout";
import { TrashWidget } from "../Components/trashWidget";
import { CartContext } from "../context/cartContext";

//importacion de Estilos
import "../Styles/Cart.css";

// firebase
import CheckoutView from "./checkout";

const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, } = useContext(CartContext);

  return (
    <Layout>
      {items.length === 0 ? (
        <div>
          <img src={EmptyCart} alt="Empty Cart" />
          <h1 className="text-2xl">No has agregado productos</h1>
          <button onClick={() => navigate("/")}>Ir al Inicio</button>
        </div>
      ) : (
        <div>
          <CheckoutView></CheckoutView>
        <div className="mainContainer">
          <div className="cartContainer">
            {items.map((product) => {
              const quantityAdded = product.quantityAdded;
              return (
                <div>
                  <Item product={product.item} quantityAdded={quantityAdded} />
                  <TrashWidget itemId={product.item.id} />
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
        </div>
      )}
    </Layout>
  );
};

export default CartView;
