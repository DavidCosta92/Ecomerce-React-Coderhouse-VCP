import "./Products.css";
import ItemCounter from "./ItemCount/ItemCount";

const Products=({data}) =>{
    const {titulo, precio, src, description, textoAlt, stockDisponible} =data;
    return(
        
        <div className="productCard">
            <p className="tituloProducto">{titulo}</p>
            <img src={`./assets/imagenes/products/${src}`} alt={textoAlt}/>
            <p className="productPrice">${precio}</p>
            <p className="productDescription">{description}</p>
            <ItemCounter stockDisponible={stockDisponible}/>
            <button className="btnBuy">Agregar!</button> 
        </div>
    )
}
export default Products;