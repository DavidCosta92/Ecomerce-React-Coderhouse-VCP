import "./ProductDetail.css";
import ItemCounter from "../ItemCount/ItemCount";
import SlideProductImg from "../SlideProductImg/SlideProductImg";
import { useState } from "react";
import {Link} from "react-router-dom"
import SizeSelector from "../SizeSelector/SizeSelector";


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
            <SizeSelector/>
            
            <p className="stockDisponible">Stock disponible: {stock}</p>
            {unitsSelected>10? <Link to="/cart"><button className="btnTerminarCompra">Terminar Compra</button></Link>:<ItemCounter unitsSelected={setUnitsSelected} productData={data}/>}
            
        </div>
    )
}
export default ProductDetail;
