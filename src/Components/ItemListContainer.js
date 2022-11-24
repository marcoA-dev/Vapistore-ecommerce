import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

// Own component
import ItemList from "./ItemList";

// Mocks
import {items} from "../mocks/itemMocks";



const ItemListContainer = () => {

  const {category } = useParams();

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    new Promise((resolve) => setTimeout(() => {
     resolve(items);
   },2000)
   ).then((data)=> {
    if (category) {
      const categories = data.filter(product=> product.category === category)
      setProducts(categories);
    } else{
      setProducts(data);
    }
   });
  }, [category])





  return (
    <>
    <ItemList products={products}></ItemList>
    </>
    
  )
}

export default ItemListContainer