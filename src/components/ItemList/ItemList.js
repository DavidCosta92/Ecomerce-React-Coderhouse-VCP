import Products from "../Products/Products";

const ItemList = ({dataProducts})=>{
    return(
        <>
           {dataProducts.map((product)=>{
                return <Products key={product.id} data={product}/>
            })}
        </>
    )
}
export default ItemList;