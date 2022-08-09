import "./Products.css";
import {Link} from "react-router-dom"

const Products=({data}) =>{
    const {title, price, srcA, description, textoAlt, id} =data;
    return(
        <Link to={`/products/id=${id}`}>
            <div className="productCard">
                <p className="tituloProducto">{title}</p>
                <img src={`../assets/imagenes/products/${srcA}`} alt={textoAlt}/>
                <p className="productPrice">${price}</p>
                <p className="productDescription">{description}</p>
                <button className="btnBuy">Ver mas???!</button> 
            </div>
        </Link>
    )
}
export default Products;