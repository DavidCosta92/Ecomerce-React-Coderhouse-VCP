import "./Products.css";
import {Link} from "react-router-dom"

const Products=({data}) =>{
    const {titulo, precio, srcA, description, textoAlt, id} =data;
    return(
        <Link to={`/productos/id=${id}`}>
            <div className="productCard">
                <p className="tituloProducto">{titulo}</p>
                <img src={`../assets/imagenes/products/${srcA}`} alt={textoAlt}/>
                <p className="productPrice">${precio}</p>
                <p className="productDescription">{description}</p>
                <button className="btnBuy">Agregar!</button> 
            </div>
        </Link>
    )
}
export default Products;