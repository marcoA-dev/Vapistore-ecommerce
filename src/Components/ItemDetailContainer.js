import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef)
      .then((item) => {
        if (item.exists()) {
          setItem({ id: item.id, ...item.data() });
        }
      })
      .catch((err) => console.error({ err }));
  }, [id]);

  console.log(item);

  if (!item) {
    return (
      <div className="contenedorCarga">
        <div className="carga"></div>
      </div>
    );
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
