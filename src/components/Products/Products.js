import "./Products.css";

const Products=({data}) =>{
    const {titulo, precio, src, description, textoAlt, stockDisponible} =data;
    return(
        <div className="productCard">
            <p className="tituloProducto">{titulo}</p>
            <img src={`./assets/imagenes/products/${src}`} alt={textoAlt}/>
            <p className="productPrice">${precio}</p>
            <p className="productDescription">{description}</p>
            <button className="btnBuy">Agregar!</button> 
        </div>
    )
}
export default Products;