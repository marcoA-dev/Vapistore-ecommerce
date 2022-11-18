/* eslint-disable no-template-curly-in-string */
import React,{useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import Swal from 'sweetalert2';
import ItemList from './ItemList';


const productos = [
  {
    id:"1",
    name:"Vaporesso XROS-2",
    image:"https://dojiw2m9tvv09.cloudfront.net/39213/product/X_xros-2-kit-82225.jpg?86",
    descripcion:"El Vaporesso Xros 2 Pod está diseñado con una estética similar respecto a su predecesor pero posee varias mejoras. Posee con una batería integrada de 1000 mAh y es un digno rival a tener en cuenta gracias a su versatilidad y configuración de calada.",
    precio:"$35.990"
  },
  {
    id:"2",
    name:"Vaporesso Gen 80S",
    descripcion:"Bienvenidos a la nueva familia GEN 80S de la serie GEN. El nuevo GEN 80S es compatible con 1 batería 18650, potenciadas con el espectacular AXON CHIP de última generación, creando el balance perfecto entre producción de vapor y cuidados de la batería. Presentado en increíbles y hermosos colores, el GEN 80S es 40% mas liviano que su antecesor",
    precio:"$54.990"
  }
]


const ItemListContainer = () => {

  const [products,setProducts] = useState([]);

  
  const productList = new Promise((resolve) =>
   setTimeout(() => {
    resolve(productos);
  },2000))

  productList.then((data)=> setProducts(data));



  const onAdd = (quantity) =>{
    Swal.fire(
      'Good job!',
      `Se Agregaron exitosamente ${quantity} unidades al Carrito`,
      'success'
    )
  }

  return (
    <>
    <ItemList products={products}></ItemList>
    <ItemCount initial ={1} stock={5} onAdd={onAdd}></ItemCount>
    </>
    
  )
}

export default ItemListContainer