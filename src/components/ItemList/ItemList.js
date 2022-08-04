import Products from "../Products/Products";
const ItemList = ({listProducts})=>{
    return(
        <>
           {listProducts.map((product)=>{
                return <Products key={product.id} data={product}/>
            })}
        </>
    )
}
export default ItemList;