import "./Products.css";
import {Link} from "react-router-dom"

const Products=({data}) =>{
    const {title, price, srcA, textoAlt, id, stock} =data;
    return(
        <Link to={`/Products/Id=${id}`}>
            <div className="productCard">
                <p className="tituloProducto">{title}</p>                
                <img src={`../assets/imagenes/${srcA}`} alt={textoAlt} className={stock===0? "imgSoldOut":""}/>
                <p className="productPrice">${price}</p>
                {stock===0 && (<p className="txtSoldOut">(Producto Sin stock)</p>) }                 
                {stock===0? <button className="btnBuy SoldOut">Ver igual</button> : <button className="btnBuy">Ver mas</button>}
            </div>
        </Link>
    )
}
export default Products;