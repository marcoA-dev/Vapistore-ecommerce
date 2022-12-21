import Item from "./Item";

export const ItemList = ({ products}) => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {products.map((Product,index) => (
        <Item key={index} product={Product} />
      ))}
    </ul>
  );
};
export default ItemList;
