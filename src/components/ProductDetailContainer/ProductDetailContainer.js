import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail";

import "./ProductDetailContainer.css"

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore";



const ProductsDetailContainer=()=>{
    const {id} =useParams();    
    // USANDO FIREBASE
    const getProduct = async ()=>{
        const docRef = doc(db, "products", id)
        const docSnapshot = await getDoc(docRef)
        let product=docSnapshot.data()
        product.id=id
        return product;
       }

    const [product, setProduct]= useState([]);
    const[spinner, setSpinner]=useState(false);
    useEffect(()=>{
            getProduct()
            .then((response)=>{
                setSpinner(true);
                setTimeout(()=>{
                    setSpinner(false);
                    setProduct(response)
                },200) })
            .catch((error)=>{
                console.log("llamada a mock fallo", error)
                })
    }, [id])

    return(
        <div>
            {spinner&&(
                    <div className="spinner"> 
                        <Box sx={{ display: 'flex' }} >
                            <CircularProgress />
                        </Box>
                    </div>
            )}
            
            {!spinner&&(
                <div className="productContainer">
                    <ProductDetail key={id} data={product}/>
                </div>
                )
            }
        </div>
    )
}

export default ProductsDetailContainer;