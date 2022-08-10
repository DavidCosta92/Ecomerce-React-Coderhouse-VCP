import { useEffect, useState } from "react";
import ProductDetailItem from "../ProductDetailItem/ProductDetailItem";

import ProductsMock from "../Products/ProductsMock";


const ProductsDetailContainer=()=>{

    const [listProducts, setListProducts] = useState([]);   
    const[spinner, setSpinner]=useState(false);
    useEffect(()=>{
        const getProducts= new Promise( (resolve, reject) =>{
             setSpinner(true);
             setTimeout(()=>{
                setSpinner(false);
                resolve(ProductsMock)
            },1000)
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
                <ProductDetailItem dataProducts={listProducts}/>
            </div>
        </div>
    )
}

export default ProductsDetailContainer;