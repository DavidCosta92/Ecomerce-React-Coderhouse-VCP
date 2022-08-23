import "./Products.css";
import {Link} from "react-router-dom"

const Products=({data}) =>{
    const {title, price, srcA, textoAlt, id, stockXS,stockS,stockM,stockL,stockXL,} =data;
    let totalStock=stockXS+stockS+stockM+stockL+stockXL;
    return(
        <Link to={`/Products/Id=${id}`}>
            <div className="productCard">
                <p className="tituloProducto">{title}</p>                
                <img src={`../assets/imagenes/${srcA}`} alt={textoAlt} className={totalStock===0? "imgSoldOut":""}/>
                <p className="productPrice">${price}</p>
                {totalStock===0 && (<p className="txtSoldOut">(Producto Sin stock)</p>) }                 
                {totalStock===0? <button className="btnBuy SoldOut">Ver igual</button> : <button className="btnBuy">Ver mas</button>}
            </div>
        </Link>
    )
}
export default Products;