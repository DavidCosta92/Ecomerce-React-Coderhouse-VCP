import { ConstructionOutlined } from "@mui/icons-material";
import { createContext, useState } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    
    

    const [cartProducts, setCartProducts] = useState([]);  
    const [amountInCart, setAmountInCart] = useState(0);
    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bought, setBought] = useState(false);
    const [orderID, setOrderID]=useState();
    const [order, setOrder]=useState();

   /* function existCartStorage(){
        let carritoEnLocal=  JSON.parse(localStorage.getItem("userCart"));
        carritoEnLocal? setCartProducts(carritoEnLocal) : setCartProducts([]);
        let resp= carritoEnLocal? "si hay" :"no hay";
        console.log("carrito en local?",resp);
    }
*/

/// ULTIMA PRUEBA... INTENTE SACAR LA INFO DEL LOCAL Y PUSHEAR TODOS LOS PRODUCTOS AL CARRITO... NO FUNCIONA!
  
/*
    function loadProductsFromLocalStorage(){
        let carritoEnLocal=  JSON.parse(localStorage.getItem("userCart"));
        console.log("mostrando carrito en local",carritoEnLocal)
        carritoEnLocal.map((producto)=>{
           // producto.inCart=producto.inCart;
           // producto.size=producto.size;
            setAmountInCart(producto.inCart);
            cartProducts.push(producto)
            setCartProducts(cartProducts);
            console.log("agregue el producto",producto )
        })
        console.log("terminie de agruegar todos los productos del local sto, ahora cart produc tiene=>",cartProducts)
        calcSumTotal()
        
    }
    loadProductsFromLocalStorage();
    
   */


    function saveLocalStorage(cartProducts){
        localStorage.setItem("userCart",JSON.stringify(cartProducts));
    }
    function removeItemLocalStorage(){
        deleteCartLocalStorage();
        saveLocalStorage(cartProducts);
    }

    function deleteCartLocalStorage(){
         localStorage.removeItem("userCart");
    }


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
        saveLocalStorage(cartProducts)
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
            saveLocalStorage(cartProducts)
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
        removeItemLocalStorage(productData);
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
        deleteCartLocalStorage();
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