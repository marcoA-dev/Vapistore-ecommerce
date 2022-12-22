import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import "../Styles/Card.css";

const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product.img);

  const description = product.description.slice(0, 20);
  const title = product.name.slice(0, 30);

  const handleNavigate = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div className="card-container">
    <div className="container" onClick={handleNavigate}>
      <div className="card">
        <div className="card-header">
          <img src={img} alt="Product" className="itemImage" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">
            {product.name.length > 20 ? `${title} ...` : product.name}
          </span>
          <hr />
          <p>
            {product.description.length > 30
              ? `${description} ...`
              : product.description}
          </p>
          <hr />
          <div>
            <span className="font-bold">${product.price}</span>
            <p
              className={
                product.stock === 0 ? "text-xs text-red-500" : "text-xs"
              }
            >
              {product.stock === 0
                ? "Sin Stock"
                : quantityAdded
                ? `Agregados: ${quantityAdded}`
                : `En Stock: ${product.stock}`}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Item;
