import Products from "../Products/Products";
import "./ItemListContainer.css"
const ItemListContainer=({tipoProductos})=>{
    return(
        <div>
            <p className="tituloProductoContainer">{tipoProductos}</p> 
            <div className="productContainer">
                <Products titulo="Samsung A31" precio={45000} src="celular/cel1.png" description=" 64gb, 4gb, ram Quad-cam" textoAlt="Celular samsung A31" />
                <Products titulo="Samsung A52" precio={70000} src="celular/cel2.png" description="128gb Rom, 12 Ram, Hexa-Cam" textoAlt="Celular samsung A52" />
                <Products titulo="Samsung A73" precio={129000} src="celular/cel3.png" description="128gb Rom, 12 Ram, Hexa-Cam" textoAlt="Celular samsung A73" />
                <Products titulo="Samsung Note" precio={217000} src="celular/cel4.png" description="1Tb Rom, 20 Ram, Octa-Cam" textoAlt="Celular samsung Note" />
            </div>
        </div>
    )
}

export default ItemListContainer;