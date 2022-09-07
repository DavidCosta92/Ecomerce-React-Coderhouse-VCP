import "./ProductDetail.css";
import ItemCounter from "../ItemCount/ItemCount";
import SlideProductImg from "../SlideProductImg/SlideProductImg";
import { useState } from "react";
import {Link} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail=({data}) =>{
    const {title, price, srcA, srcB, srcC,srcD , description, textoAlt, stockXS,stockS,stockM,stockL,stockXL,descriptionExtra, discount} =data;
    const [unitsSelected, setUnitsSelected] = useState(0);
    let stockTotal=stockXS+stockS+stockM+stockL+stockXL;

    return(
        <div className="productCard productDetails">
            <p className="tituloProducto">{title}</p>
            {discount!==0 && (
                        <div className="offer">
                            <p>-{discount}%OFF</p>
                        </div>
            )}
            <p className="productDescription">{description}</p>
            <SlideProductImg a={srcA} b={srcB} c={srcC} d={srcD}  textoAlt={textoAlt} />
            <p className={`productPrice ${discount!==0 && "discountPrice"}`}>${price*discount/100+price}</p>
            {discount!==0 && (
                        <div className="offerPrice">    
                            <p>${price}</p>
                        </div>
                )} 
            
            <p className="productDescriptionExtra">{descriptionExtra}</p>
            
            
            {stockTotal===0? 
                (<p className="soldOutText">Producto Agotado</p>) 
                : (unitsSelected>=1? 
                    (<><Link to="/checkout"><button className="btnTerminarCompra">Terminar Compra</button></Link><Link to="/"><button className="btnTerminarCompra">Ver mas productos</button></Link></>) 
                    : (<ItemCounter unitsSelected={setUnitsSelected} productData={data}/>))
                }
                {<ToastContainer
                    position="bottom-left"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
            pauseOnHover/>}
        </div>
    )
}
export default ProductDetail;
