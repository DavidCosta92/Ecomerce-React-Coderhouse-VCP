import Products from "../Products/Products";


const ItemList = ({listProducts,categoria})=>{
    let productosFiltrados=listProducts;
    if(categoria!="verTodo") productosFiltrados= listProducts.filter((producto)=> producto.categoria===categoria);
    if(categoria=="Ofertas") productosFiltrados=listProducts.filter((producto)=> producto.oferta===true);

    return(
        <>
           {productosFiltrados.map((product)=>{
                return <Products key={product.id} data={product}/>
            })}
        </>
    )
}
export default ItemList;