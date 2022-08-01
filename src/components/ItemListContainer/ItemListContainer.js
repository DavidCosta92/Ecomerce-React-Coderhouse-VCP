import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import ProductsMock from "../Products/ProductsMock";

const ItemListContainer=({tipoProductos})=>{

    const [listProducts, setListProducts] = useState([]);   
    useEffect(()=>{
        const getProducts= new Promise( (resolve, reject) =>{
            setTimeout(()=>{
    
    /* agregar spiner o barra de carga, detalle estetico que diga que esta cargando....  */
    
                resolve(ProductsMock)
            },2000)
        })

        getProducts
            .then( (response)=>{
                setListProducts(response);
            })
            .catch((error)=>{
            console.log("llamada a mock fallo")
            /* agregar spiner o barra de carga, detalle estetico que diga que esta cargando....  */
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