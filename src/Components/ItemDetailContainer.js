import React,{useEffect,useState} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




//mocks

import {items} from "../mocks/itemMocks";


const ItemDetailContainer = () => {

  const [item,setItem] = useState(null);
  const {id} = useParams();


  useEffect(() => {
    new Promise((resolve) =>
      // Simulation of a call to an api
      setTimeout(() => resolve(items.find((item) => item.id === id)), 1000)
    ).then((data) => setItem(data));
  }, [id]);



  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail 
          item={item}>
         </ItemDetail>;
    
}

export default ItemDetailContainer