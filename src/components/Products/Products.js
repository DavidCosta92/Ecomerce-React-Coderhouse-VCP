import "./Products.css";

const Products=({titulo, precio, src, description, textoAlt}) =>{
    return(
        <div className="productCard">
            <p className="tituloProducto">{titulo}</p>
            <img src={`./assets/imagenes/products/${src}`} alt={textoAlt}/>
            <p className="productPrice">${precio}</p>
            <button className="btnBuy">¡Comprar!</button> 
            <p className="productDescription">{description}</p>
        </div>
    )
}
export default Products;