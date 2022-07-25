import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import ProductsMock from "../Products/ItemCount/ProductsMock";

const ItemListContainer=({tipoProductos})=>{

    const [listProducts, setListProducts] = useState([]);
    
    const getProducts= new Promise( (resolve, reject) =>{
        setTimeout(()=>{




/* agregar spiner o barra de carga, detalle estetico que diga que esta cargando....  */




            resolve(ProductsMock)
        },2000)
    })
    
    useEffect(()=>{
        getProducts
            .then( (response)=>{
                setListProducts(response);
            })
            .catch((error)=>{
            console.log("llamada a mock fallo")
            console.log("agregar un alert o algo parecido que diga error")
            })
    }, [])
    



    return(
        <div>
            <p className="tituloProductoContainer">{tipoProductos}</p> 
            <div className="productContainer">
                <ItemList dataProducts={listProducts}/>
            </div>
        </div>
    )
}

export default ItemListContainer;