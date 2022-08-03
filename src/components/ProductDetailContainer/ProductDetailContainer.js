import { useEffect, useState } from "react";
import ProductDetailItem from "../ProductDetail/ProductDetailItem/ProductDetailItem";

import ProductsMock from "../Products/ProductsMock";


const ProductsDetailContainer=({idProduct})=>{

    const [listProducts, setListProducts] = useState([]);   
    useEffect(()=>{
        const getProducts= new Promise( (resolve, reject) =>{
            resolve(ProductsMock)
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
            <div className="productContainer">
                <ProductDetailItem dataProducts={listProducts} idProduct={idProduct}/>
            </div>
        </div>
    )
}

export default ProductsDetailContainer;