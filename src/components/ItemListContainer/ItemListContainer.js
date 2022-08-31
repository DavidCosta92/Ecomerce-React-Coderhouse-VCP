import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import { Skeleton } from "@mui/material";

//import * as React from 'react';
//import CircularProgress from '@mui/material/CircularProgress';
//import Box from '@mui/material/Box';

import { collection, getDocs,query,where} from "firebase/firestore";
//import { orderBy } from "firebase/firestore";
//import { limitToLast } from "firebase/firestore";
import db from "../../firebaseConfig"
import ColorToggleButton from "../ToggleButtonGroup/ToggleButtonGroup";


const ItemListContainer=({Category})=>{
    const[listProducts, setListProducts] = useState([]);
    const [loading, setLoading]=useState(true);
    const [orderProducts, setOrderProducts]=useState("");  

    function orderProductsBy(order){
        switch(order){
            case "priceAsc": 
                listProducts.sort(compareByPrice);
                break;
            case "priceDesc": 
                listProducts.sort(compareByPriceDesc);
                break;
            case "category": 
                listProducts.sort(compareByCategory);
                break;
        }
        setOrderProducts(order);
        setListProducts(listProducts);
    }

    function compareByPrice(a,b){
        if ( a.price < b.price) return -1;
        if ( a.price > b.price) return 1;
        return 0;
    }
    function compareByPriceDesc(a,b){
        if ( a.price > b.price) return -1;
        if ( a.price < b.price) return 1;
        return 0;
    }
    function compareByCategory(a,b){
        if ( a.category < b.category) return -1;
        if ( a.category > b.category) return 1;
        return 0;
    }



    const productRender= (res)=>{
        setTimeout(()=>{
            setLoading(false);
            setListProducts(res.docs.map(product=> ({id: product.id, ...product.data()})));
        },1500)           
    }

    const queryCollection= collection (db, "products")   
    useEffect(()=>{
        
        if(Category==="Ofertas"){
            const queryFilter=query(queryCollection, where ("oferta","==",true ) /*, orderBy('price') , limitToLast(2)*/) 
// DEBO CREAR UN INDEX ESPECIAL PARA USAR ORDER Y WHERE, O SOLO USAR ORDER... EN CUANTO A LIMIT, SE PODRIA USAR LUEGO DE USAR ORDER
//  PARA CREAR EL INDEX => https://console.firebase.google.com/project/ecommerce-coderhouse-vcp/firestore/indexes?create_composite=Cllwcm9qZWN0cy9lY29tbWVyY2UtY29kZXJob3VzZS12Y3AvZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL3Byb2R1Y3RzL2luZGV4ZXMvXxABGgoKBm9mZXJ0YRABGgkKBXByaWNlEAIaDAoIX19uYW1lX18QAg

            getDocs(queryFilter)
            .then(res=> productRender(res))
           /* .catch((error)=>{
                console.log("llamada a Ofertas fallo")
                })*/

        }
        else if (Category==="verTodo"){
            getDocs(queryCollection)
            .then(res=> productRender(res))
           /* .catch((error)=>{
                console.log("llamada a verTodo fallo")
                }) */
        }
        else if (Category!=="verTodo"){
            const queryFilter=query(queryCollection, where ("category","==",Category ))
            getDocs(queryFilter)
            .then(res=> productRender(res))
          /*  .catch((error)=>{
                console.log("llamada a categoria fallo")
                }) */
        }
    }, [Category])

    let title;
    Category==="verTodo"? title="Todos nuestros productos":title=Category; 

    const renderSkeleton=()=>{
        let productListSkeleton=[];
        for (let p=0; p<10;p++){
            productListSkeleton.push(
                <div className="productCard" key={p}>
                    <Skeleton  className="skeletonTxt" width={300} height={33} duration={0.5}/>               
                    <Skeleton  variant="rectangular" className="skeletonImg" width={300} height={300} duration={0.5}/>
                    <Skeleton  className="skeletonTxt" width={300} height={200} duration={0.5}/>
                </div>)
        }
        return (
            <div>
                <Skeleton  className="skeletonTxt" width={300} height={50} duration={0.5}/>
                <div className="productContainer containerSkeleton">
                    {productListSkeleton}
                </div>
            </div>
        )
    }

    const renderContent=()=>{
        return(
            <div>
                <p className="tituloProductoContainer">{title}</p>
                <ColorToggleButton orderProductsBy={orderProductsBy}/>
                <div className="productContainer">                                
                    <ItemList listProducts={listProducts}/>
                </div>
            </div>
        )
    }
    
    return(
        <div>
            {loading? renderSkeleton():renderContent()}
        </div>
    )
}

export default ItemListContainer;