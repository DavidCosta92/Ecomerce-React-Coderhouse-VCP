import ProductDetail from "../ProductDetail";

const ProductDetailItem = ({dataProducts, idProduct})=>{
    return(
        <>
           {dataProducts.map((product)=>{
            if(product.id==idProduct) return <ProductDetail key={idProduct} data={product}/> 
            })}
        </>
    )
}
export default ProductDetailItem;