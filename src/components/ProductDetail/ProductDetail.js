import "./ProductDetail.css";
import ItemCounter from "../ItemCount/ItemCount";
import SlideProductImg from "../SlideProductImg/SlideProductImg";
import { useState } from "react";
import {Link} from "react-router-dom"


const ProductDetail=({data}) =>{
    const {title, price, srcA, srcB, srcC,srcD , description, textoAlt, stock,descriptionExtra} =data;
    const [unitsSelected, setUnitsSelected] = useState(0);
    
    return(
        <div className="productCard productDetails">
            <p className="tituloProducto">{title}</p>
            <p className="productDescription">{description}</p>
            <SlideProductImg a={srcA} b={srcB} c={srcC} d={srcD}  textoAlt={textoAlt} />
            <p className="productPrice">${price}</p>
            <p className="productDescriptionExtra">{descriptionExtra}</p>

            
            
            {unitsSelected>=1? <Link to="/checkout"><button className="btnTerminarCompra">Terminar Compra</button></Link>:<ItemCounter unitsSelected={setUnitsSelected} productData={data}/>}
            
        </div>
    )
}
export default ProductDetail;
