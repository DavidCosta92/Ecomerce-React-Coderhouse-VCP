import { createContext, useState } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);

    function addProductToCart(product){
        if(!cartProducts.includes(product)){
            product.inCart=1;
            setCartProducts(cartProducts=> [...cartProducts, product])
        } else{
            addUnitToCart(product);
        }
    }

    function addUnitToCart(product){
         /*  buscar producto a actualizar y aumentar propiedad   */
        let productToAdd = cartProducts.find(p => p.id=product.id)
        productToAdd.inCart= productToAdd.inCart+1;

        let indexToUpdate= cartProducts.indexOf(product)
        console.log("in cart antes", cartProducts[indexToUpdate].inCart)
        cartProducts[indexToUpdate].inCart=cartProducts[indexToUpdate].inCart+1;
        console.log("in cart despu", cartProducts[indexToUpdate].inCart)


     //    setCartProducts();
     //    console.log("agregaste un segundo producto de ", productToAdd)
     //    console.log("el carrito queda con ", cartProducts)
    }


    const data={
        cartProducts,
        addProductToCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};