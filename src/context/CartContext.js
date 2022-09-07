import { createContext, useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let productCartFromLocalStorage;
let totalAmountInCartFromLocalStorage=0;
let totalPriceFromLocalStorage=0;

if(JSON.parse(localStorage.getItem("userCart"))){
    productCartFromLocalStorage = JSON.parse(localStorage.getItem("userCart"));
    productCartFromLocalStorage.map((product)=>{
        totalAmountInCartFromLocalStorage+=product.inCart;
        totalPriceFromLocalStorage=totalPriceFromLocalStorage+product.inCart*product.price
    })

} else{
    productCartFromLocalStorage = localStorage.setItem("userCart",JSON.stringify([]));
    totalAmountInCartFromLocalStorage=0;
    totalPriceFromLocalStorage=0;
}

const CartContext =createContext();
const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState(productCartFromLocalStorage===undefined? []:productCartFromLocalStorage);    
    const [totalAmountInCart, setTotalAmountInCart] = useState(productCartFromLocalStorage===undefined? 0:totalAmountInCartFromLocalStorage);
    const [totalPrice, setTotalPrice] = useState(productCartFromLocalStorage===undefined? 0:totalPriceFromLocalStorage);
    const [orderID, setOrderID]=useState();
    const [order, setOrder]=useState();  

    function saveLocalStorage(){
        localStorage.setItem("userCart",JSON.stringify(cartProducts));
    }
    function deleteCartLocalStorage(){
        localStorage.setItem("userCart",JSON.stringify([]));
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
            cartProducts.push(productData)
            setCartProducts(cartProducts);
            calcSumTotal(cartProducts);
            saveLocalStorage();
   
            


//// REVISAR NOTIFICACIONES, HAY ALGUN ERROR CON LAS CANTIDADES DE ITEM COUNTER.. NO  ME LAS MUESTRA CORRECTAMENTE



            let es;
            ItemCounter=1? es="" : es="es"
            renderAlert("success",`Agregaste ${ItemCounter} unidad${es} de ${productData.title}`)
            console.log("mostrando es", es)
            console.log("mostrando  ItemCounter",  ItemCounter)
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
        setCartProducts(newCart);
        calcSumTotal(newCart);
        saveLocalStorage();
        let es;
        ItemCounter=1? es="" : es="es"
        renderAlert("success",`Agregaste ${ItemCounter} unidad${es} de ${productData.title}`)
    }
    function removeUnitFromCart(productData){
        if(productData.inCart>1){
            let indexToUpdate= cartProducts.indexOf(productData)
            let newCart = cartProducts;
            newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)-1;
            setCartProducts(newCart);
            calcSumTotal(cartProducts)
            saveLocalStorage(cartProducts)
            renderAlert("error",`Eliminaste 1 unidad de ${productData.title}`)
        } else{
            removeAllUnitsFromCart(productData);
        }      
    }

    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
        setCartProducts(cartProducts);
        calcSumTotal(cartProducts);
        saveLocalStorage(cartProducts);
        renderAlert("error",`Eliminaste todas las unidades de ${productData.title}`)
    }
    function buyCart(newOrder,orderID){
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


    function calcSumTotal(cartProducts){
        let totalAmount=0;
        let subtotal=0;
        cartProducts.map((p)=>{
            totalAmount+=p.inCart;
            subtotal+=p.price * p.inCart
        })
        setTotalAmountInCart(totalAmount);
        setTotalPrice(subtotal);
    }

    function deleteCart(){
        clearCart();
        renderAlert("error",`¡VACIASTE EL CARRITO!`)  
    }

    function renderAlert(type, msj){
        let theme='light';
        JSON.parse(localStorage.getItem("userThemePreference")) && (theme=JSON.parse(localStorage.getItem("userThemePreference")));
        if(type==="success" && theme=== 'light'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else if(type==="success"&& theme=== 'dark'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
        else if(type==="error" && theme=== 'light'){
            toast.error(msj, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else if(type==="error" && theme=== 'dark'){
            toast.error(msj, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
            });
        }
    }

    const data={
        cartProducts,
        addProductToCart,
        clearCart,
        removeUnitFromCart,
        removeAllUnitsFromCart,
        buyCart,
        totalAmountInCart,
        setTotalAmountInCart,
        totalPrice,
        calcSumTotal,
        orderID,
        order,
        addUnitsToCart,
        deleteCart,
        renderAlert
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};