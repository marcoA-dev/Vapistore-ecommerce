import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import "../Styles/CheckOut.css";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;


    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);

  return (
    <div className="checkOutContainer">
      <div className="formCheckOut">
        <form onSubmit={handleFinalizePurchase} className="form">
        <h5 className="checkoutTitle">CheckOut</h5>
          <div className="row">
            <div className="col ">
              <input
                type="text"
                className="form-control nameInput"
                placeholder="First name"
                aria-label="First name"
                name="nombre"
                required
              />
            </div>
            <div>
              <div className="col">
                <input
                  type="number"
                  className="form-control numberInput"
                  placeholder="Number"
                  aria-label="Number"
                  name="phone"
                  required
                />
              </div>
              <div>
                <input
                  type={"email"}
                  className="form-control emailInput"
                  id="inputEmail3"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="TotalBuy">
            <span className="priceSpan">Total a pagar: ${totalAmount}</span>
            <button type="submit" className="finalizarBtn">
              <span>Finalizar Compra</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutView;
