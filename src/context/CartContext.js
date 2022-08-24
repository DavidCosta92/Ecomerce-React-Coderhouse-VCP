import { createContext, useState, useEffect } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);
    const [amountInCart, setAmountInCart] = useState(0);
    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bought, setBought] = useState(false);
    const [orderID, setOrderID]=useState();
    const [order, setOrder]=useState();

    function isInCart(productData){
        let isInCart=false;
        cartProducts.map((product)=>{
            if(product.id===productData.id){
                isInCart=true;
            }
        })
        return isInCart;
    }

    function addProductToCart(productData,ItemCounter, size){
        if(isInCart(productData)){
            addUnitsToCart(productData,ItemCounter);            
        } else{
            productData.inCart=ItemCounter;
            productData.size=size;
            setAmountInCart(productData.inCart);
            cartProducts.push(productData)
            setCartProducts(cartProducts);
            calcSumTotal()
        }   
    }
    function addUnitsToCart(productData,ItemCounter){
        let ids=[];
        cartProducts.map((product)=>{
            ids.push(product.id)
        })
        let indexToUpdate= ids.indexOf(productData.id)
        let newCart= cartProducts;
        newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)+ItemCounter;
        setAmountInCart(productData.inCart +1);
        setCartProducts(cartProducts);
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
        calcSumTotal();
      
    }

    function buyCart(newOrder,orderID){
        setBought(true);
        setOrderID(orderID);
        setOrder(newOrder);
        clearCart();
    }

    function clearCart(){
        setTotalAmountInCart(0); // ERROR, NO BORRA LA CANTIDAD DE ITEMS, CUANDO DESDE EL WIDGET SE APRIETA ELIMINAR CARRITO!!
        setTotalPrice(0);
        setCartProducts([]);
    }


    function calcSumTotal(){
        let totalAmount=0;
        cartProducts.map((p)=>{
            totalAmount+=p.inCart;
        })
        setTotalAmountInCart(totalAmount);
    }

    function subtotal(products) {
        let subtotal=0;
        products.map((product)=>{
            subtotal+=product.price * product.inCart
        })
        setTotalPrice(subtotal);
      return subtotal;
    }

    function warningClearCart(){
        /// hacer cartel de warning.. si es ok se vacia y sino no
        clearCart();
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
        setTotalAmountInCart,
        totalPrice,
        calcSumTotal,
        bought,
        setBought,
        orderID,
        subtotal,
        order,
        addUnitsToCart,
        warningClearCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};