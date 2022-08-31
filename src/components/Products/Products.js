import "./Products.css";
import {Link} from "react-router-dom"

const Products=({data}) =>{
    const {title, price, srcA, textoAlt, id, stockXS,stockS,stockM,stockL,stockXL,discount} =data;
    let totalStock=stockXS+stockS+stockM+stockL+stockXL;
    return(
        <Link to={`/Products/Id=${id}`}>
            <div className="productCard">
                <p className="tituloProducto">{title}</p>
                {discount!==0 && (
                        <div className="offer">
                            <p>-{discount}%OFF</p>
                        </div>
                )}                
                <img src={`../assets/imagenes/${srcA}`} alt={textoAlt} className={totalStock===0? "imgSoldOut":""}/>
                <p className={`productPrice ${discount!==0 && "discountPrice"}`}>${price*discount/100+price}</p>
                {discount!==0 && (
                        <div className="offerPrice">    
                            <p>${price}</p>
                        </div>
                )} 
                {totalStock===0 && (<p className="txtSoldOut">(Producto Sin stock)</p>) }                 
                {totalStock===0? <button className="btnBuy SoldOut">Ver igual</button> : <button className="btnBuy">Ver mas</button>}
            </div>
        </Link>
    )
}
export default Products;