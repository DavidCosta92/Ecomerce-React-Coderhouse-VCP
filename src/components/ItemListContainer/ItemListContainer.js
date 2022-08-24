import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { collection, getDocs,query,where} from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { limitToLast } from "firebase/firestore";
import db from "../../firebaseConfig"
import NavBarSearch from "../NavBarSearch/NavBarSearch";


const ItemListContainer=({Category})=>{
    const[spinner, setSpinner]=useState(false);
    const[listProducts, setListProducts] = useState([]);
    const productRender= (res)=>{
        setSpinner(true);
        setTimeout(()=>{
            setSpinner(false);
            setListProducts(res.docs.map(product=> ({id: product.id, ...product.data()})));
        },1000)           
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

    return(
        <div>
            
            <p className="tituloProductoContainer">{title}</p>
            {spinner&&(
                    <div className="spinner"> 
                        <Box sx={{ display: 'flex' }} >
                            <CircularProgress />
                        </Box>
                    </div>
            )}
            <div className="productContainer">                                
                <ItemList listProducts={listProducts}/>
            </div>
        </div>
    )
}

export default ItemListContainer;