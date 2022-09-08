import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductDetailContainer.css"
import { Skeleton } from "@mui/material";
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const ProductsDetailContainer=()=>{
    const [product, setProduct]= useState([]);
    const [loading, setLoading]=useState(true);  
    const {id} =useParams();

    const getProduct = async ()=>{
        const docRef = doc(db, "products", id)
        const docSnapshot = await getDoc(docRef)
        let product=docSnapshot.data()
        product.id=id
        return product;
       }

    const loaderSkeleton=()=>{
        return(
            <div className="productContainer">
                <div className="productCard productDetails">
                    <Skeleton  className="skeletonTxt" height={50} duration={0.5}/>
                    <Skeleton  variant="rectangular" className="skeletonImg" height={500} duration={0.5}/>
                    <Skeleton  className="skeletonTxt" height={44} duration={0.5}/>
                    <Skeleton  className="skeletonTxt"  height={46} duration={0.5}/>
                    <Skeleton  className="skeletonTxt"  height={110} duration={0.5}/>                              
                </div>
            </div>
        )
    }

    const renderContent=()=>{
        return(
            <div className="productContainer">
                <ProductDetail key={id} data={product}/>
            </div>
        )
    }


    useEffect(()=>{
            getProduct()
            .then((response)=>{
                setTimeout(()=>{
                    setLoading(false);
                    setProduct(response)
                },1500) })
            .catch((error)=>{
                console.log("llamada a mock fallo", error)
                })
    }, [id])

    return(
        <div>
            {loading? loaderSkeleton():renderContent()}
        </div>
    )
}

export default ProductsDetailContainer;