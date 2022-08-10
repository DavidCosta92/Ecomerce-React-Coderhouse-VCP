import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import ProductsMock from "../Products/ProductsMock";

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemListContainer=({Category})=>{
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
            })
    }, [Category])

    let title;
    Category==="verTodo"? title="Todos nuestros productos":title=Category;


    let productosFiltrados=listProducts;
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