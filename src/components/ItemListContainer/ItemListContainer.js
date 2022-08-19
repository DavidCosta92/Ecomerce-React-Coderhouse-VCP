import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { collection, getDocs,query,where} from "firebase/firestore";
import db from "../../firebaseConfig"


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

    useEffect(()=>{
        const queryCollection= collection (db, "products")
    
        if(Category==="Ofertas"){
            const queryFilter=query(queryCollection, where ("oferta","==",true ))
            getDocs(queryFilter)
            .then(res=> productRender(res))
        }
        else if (Category==="verTodo"){
            getDocs(queryCollection)
            .then(res=> productRender(res))
        }
        else if (Category!=="verTodo"){
            const queryFilter=query(queryCollection, where ("category","==",Category ))
            getDocs(queryFilter)
            .then(res=> productRender(res))
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