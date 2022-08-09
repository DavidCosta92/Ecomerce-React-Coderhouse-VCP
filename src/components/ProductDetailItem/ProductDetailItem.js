import ProductDetail from "../ProductDetail/ProductDetail";
import {useParams} from "react-router-dom"

const ProductDetailItem = ({dataProducts})=>{
    const {id} =useParams();
    return(
        <>
           {dataProducts.map((product)=>{
            if(product.id==id) return <ProductDetail key={id} data={product}/> 
            })}
        </>
    )
}
export default ProductDetailItem;