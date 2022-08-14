import { createContext, useState, useEffect } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);
    
    const [amountInCart, setAmountInCart] = useState(0);

    function addProductToCart(productData,ItemCounter){
        if(!cartProducts.includes(productData)){
            productData.inCart=ItemCounter;
            setCartProducts(cartProducts=> [...cartProducts, productData])
            calcSumTotal()
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
        calcSumTotal()
    }
    function removeUnitFromCart(productData){
        if(productData.inCart>1){
            let indexToUpdate= cartProducts.indexOf(productData)
            let newCart = cartProducts;
            newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)-1;
            setAmountInCart(productData.inCart -1);
            setCartProducts(newCart);
            calcSumTotal()
        } else{
            removeAllUnitsFromCart(productData);
        }
        
    }
    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
        
        setAmountInCart(0);
        setCartProducts(cartProducts);
        calcSumTotal()
    }

    function buyCart(){
        /* poner link a pagossss
        podria hacer diferenciacion en tc o td, tippo plan de cuotas?
        */
    }

    function clearCart(){
        setCartProducts([]);
    }


    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    function calcSumTotal(){
        let totalAmount=0;
        let sumPrice=0;

        cartProducts.map((p)=>{
            totalAmount+=p.inCart;
            sumPrice+=p.price;
        })
        setTotalAmountInCart(totalAmount);
        setTotalPrice(sumPrice);
    }

    

    const data={
        cartProducts,
        addProductToCart,
        clearCart,
        removeUnitFromCart,
        removeAllUnitsFromCart,
        buyCart,
        amountInCart,
        totalAmountInCart,
        totalPrice
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};