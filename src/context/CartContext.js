import { createContext, useState, useEffect } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);
    const [amountInCart, setAmountInCart] = useState();

    function addProductToCart(productData,ItemCounter){
        if(!cartProducts.includes(productData)){
            productData.inCart=ItemCounter;
            setCartProducts(cartProducts=> [...cartProducts, productData])
        } else{
            addUnitsToCart(productData,ItemCounter);
        }

    }
    function addUnitsToCart(productData,ItemCounter){
        let indexToUpdate= cartProducts.indexOf(productData)
        let newCart= cartProducts;
        newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)+ItemCounter;
        setAmountInCart(productData.inCart +1);
        setCartProducts(newCart);
    }
    function removeUnitFromCart(productData){
        if(productData.inCart>1){
            let indexToUpdate= cartProducts.indexOf(productData)
            let newCart = cartProducts;
            newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)-1;
            setAmountInCart(productData.inCart -1);
            setCartProducts(newCart);
        } else{
            removeAllUnitsFromCart(productData);
        }
        
    }
    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
        setCartProducts(cartProducts);
    }

    function buyCart(){








    }

    function clearCart(){
        setCartProducts([]);
    }


    const data={
        cartProducts,
        addProductToCart,
        clearCart,
        removeUnitFromCart,
        removeAllUnitsFromCart,
        buyCart,
        amountInCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};