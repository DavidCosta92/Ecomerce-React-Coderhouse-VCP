import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import ProductsMock from "../Products/ProductsMock";

const ItemListContainer=({category})=>{
    const [listProducts, setListProducts] = useState([]);   
    useEffect(()=>{
        const getProducts= new Promise( (resolve, reject) =>{
            setTimeout(()=>{
    
    /* agregar spiner o barra de carga, detalle estetico que diga que esta cargando....  */
    
                resolve(ProductsMock)
            }/*,2000*/)
        })

        getProducts
            .then( (response)=>{
                setListProducts(response);
                
            })
            .catch((error)=>{
            console.log("llamada a mock fallo")
            /* agregar spiner o barra de carga, detalle estetico que diga que esta cargando....  */
            })
    }, [category])

    let title;
    category==="verTodo"? title="Todos nuestros productos":title=category;


    let productosFiltrados=listProducts;
    if(category!=="verTodo") productosFiltrados= listProducts.filter((producto)=> producto.category===category);
    if(category=="Ofertas") productosFiltrados=listProducts.filter((producto)=> producto.oferta===true);




    return(
        <div>
            <p className="tituloProductoContainer">{title}</p>
            <div className="productContainer">                
                <ItemList listProducts={productosFiltrados}/>
            </div>
        </div>
    )
}

export default ItemListContainer;