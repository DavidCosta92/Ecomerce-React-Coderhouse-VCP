import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig"


const ItemListContainer=({Category})=>{
    const [listProducts, setListProducts] = useState([]);   
    const[spinner, setSpinner]=useState(false);

    const getProducts = async () =>{
        const productCollection= collection(db, "coleccionPrueba")
        const productsSnapshot = await getDocs(productCollection)
        const productList = productsSnapshot.docs.map((doc)=>{
            let product = doc.data() // => devuelve la info de bd en objeto json
            product.id =doc.id // crea nueva propiedad de nombre id, y le agrega el valor del id
            return product
        })
        return productList
    }

    useEffect(()=>{
        getProducts()
            .then( (response)=>{
                setSpinner(true);
                setTimeout(()=>{
                    setSpinner(false);
                    setListProducts(response);
                },1000)
            })
            .catch((error)=>{
            console.log("llamada a mock fallo")
            })
    }, [Category])

    let title;
    Category==="verTodo"? title="Todos nuestros productos":title=Category;

    let productosFiltrados=listProducts;

     // revisar para filyrar desde la llamada a firebase
    if(Category!=="verTodo") productosFiltrados= listProducts.filter((producto)=> producto.category===Category);
    if(Category=="Ofertas") productosFiltrados=listProducts.filter((producto)=> producto.oferta===true);


   

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
                <ItemList listProducts={productosFiltrados}/>
            </div>
        </div>
    )
}

export default ItemListContainer;