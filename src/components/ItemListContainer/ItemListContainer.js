import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import ProductsMock from "../Products/ProductsMock";

const ItemListContainer=({categoria})=>{
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

    let titulo;
    categoria=="verTodo"? titulo="Todos nuestros productos":titulo=categoria;

    return(
        <div>
            <p className="tituloProductoContainer">{titulo}</p>
            <div className="productContainer">                
                <ItemList listProducts={listProducts} categoria={categoria}/>
            </div>
        </div>
    )
}

export default ItemListContainer;