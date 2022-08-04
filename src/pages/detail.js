import ProductsDetailContainer from "../components/ProductDetailContainer/ProductDetailContainer";
import {useParams} from "react-router-dom"
const Detail =()=>{
    const {id} =useParams();
    return (
        <ProductsDetailContainer idProduct={id}/>
    )
}
export default Detail;