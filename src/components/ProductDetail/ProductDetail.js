import "./ProductDetail.css";
import ItemCounter from "../Products/ItemCount/ItemCount";
import SlideProductImg from "./SlideProductImg/SlideProductImg";


const ProductDetail=({data}) =>{
    const {titulo, precio, srcA, srcB, srcC, description, textoAlt, stockDisponible, id,descriptionExtra} =data;
    return(
        <div className="productCard productDetails">
            <p className="tituloProducto">Soy {titulo} y tengo el ID {id}</p>
            <p className="productDescription">{description}</p>
            <SlideProductImg a={srcA} b={srcB} c={srcC} textoAlt={textoAlt} />
            <p className="productPrice">${precio}</p>
            <p className="productDescriptionExtra">{descriptionExtra}</p>
            <p className="stockDisponible">Stock disponible: {stockDisponible}</p>
            <ItemCounter stockDisponible={stockDisponible}/>
            <button className="btnBuy">Agregar!</button> 
        </div>
    )
}
export default ProductDetail;
