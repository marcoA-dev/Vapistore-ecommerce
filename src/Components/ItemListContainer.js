import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (category) {
      const q = query(itemsCollection, where("category", "==", category));
      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(products);
      });
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(products);
      });
    }
  }, [category]);
  

  return (
    <>
      <ItemList products={products}></ItemList>
    </>
  );
};

export default ItemListContainer;
