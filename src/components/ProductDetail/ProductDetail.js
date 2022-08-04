import "./ProductDetail.css";
import ItemCounter from "../Products/ItemCount/ItemCount";
import SlideProductImg from "../SlideProductImg/SlideProductImg";


const ProductDetail=({data}) =>{
    const {titulo, precio, srcA, srcB, srcC,srcD , description, textoAlt, stockDisponible,descriptionExtra} =data;
    return(
        <div className="productCard productDetails">
            <p className="tituloProducto">{titulo}</p>
            <p className="productDescription">{description}</p>
            <SlideProductImg a={srcA} b={srcB} c={srcC} d={srcD}  textoAlt={textoAlt} />
            <p className="productPrice">${precio}</p>
            <p className="productDescriptionExtra">{descriptionExtra}</p>
            <div className="talles">
                <p>Elegi tu talle</p>
                <div className="btnsTalles">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
            </div>
            <p className="stockDisponible">Stock disponible: {stockDisponible}</p>
            <ItemCounter stockDisponible={stockDisponible}/>
            <button className="btnBuy">Agregar!</button> 
        </div>
    )
}
export default ProductDetail;
