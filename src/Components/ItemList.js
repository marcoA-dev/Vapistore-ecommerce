import Item from "./Item";

export const ItemList = ({ products}) => {
  return (
    <ul className="ulContainer">
      {products.map((Product,index) => (
        <Item key={index} product={Product} />
      ))}
    </ul>
  );
};
export default ItemList;
