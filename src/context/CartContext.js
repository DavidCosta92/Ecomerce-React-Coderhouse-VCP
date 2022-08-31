import { createContext, useState } from "react";

let productCartFromLocalStorage;
let totalAmountInCartFromLocalStorage;
let totalPriceFromLocalStorage;

if(JSON.parse(localStorage.getItem("userCart"))){
    productCartFromLocalStorage = JSON.parse(localStorage.getItem("userCart"));
    productCartFromLocalStorage.map((product)=>{
        totalAmountInCartFromLocalStorage+=product.inCart;
        totalPriceFromLocalStorage+=product.inCart*product.price
    })
    console.log("accedi al carrito guardado.. =>",productCartFromLocalStorage)
} else{
    productCartFromLocalStorage = localStorage.setItem("userCart",JSON.stringify([]));
    totalAmountInCartFromLocalStorage=0;
    totalPriceFromLocalStorage=0;
    console.log("no habia carrito, asi que cree uno nuevo vacio..=>",productCartFromLocalStorage)
}

const CartContext =createContext();

const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState(productCartFromLocalStorage);  
    const [totalAmountInCart, setTotalAmountInCart] = useState(totalAmountInCartFromLocalStorage);
    const [totalPrice, setTotalPrice] = useState(totalPriceFromLocalStorage);
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



    /// de aca para abajo revisar... y mejorar!

  //  const [amountInCart, setAmountInCart] = useState(
        /* JSON.parse(localStorage.getItem("userCart")).amountInCart */
 //   0
    /// PARA QUE LO ESSTOY USANDO??? DEBERIA SER UN AUMOUNT PARA CADA PRODUCTO... USO PARA RENDERIZAR???
 //   );



    
    const [bought, setBought] = useState(false);


   
    function addProductToCart(productData,ItemCounter, size){
        if(isInCart(productData)){
            addUnitsToCart(productData,ItemCounter);            
        } else{
            productData.inCart=ItemCounter;
            productData.size=size;
         //   setAmountInCart(productData.inCart);
            cartProducts.push(productData)
            setCartProducts(cartProducts);
            calcSumTotal(cartProducts);
            saveLocalStorage();
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
      //  setAmountInCart(productData.inCart +1);
        setCartProducts(newCart);  // antes calculaba con cart Products.. que onda??
        calcSumTotal(newCart); // antes calculaba con cart Products.. que onda??
        saveLocalStorage();
        
    }
    function removeUnitFromCart(productData){
        if(productData.inCart>1){
            let indexToUpdate= cartProducts.indexOf(productData)
            let newCart = cartProducts;
            newCart[indexToUpdate].inCart=parseInt(newCart[indexToUpdate].inCart)-1;
      //      setAmountInCart(productData.inCart -1);
            setCartProducts(newCart);
            calcSumTotal(cartProducts)
            saveLocalStorage(cartProducts)
        } else{
            removeAllUnitsFromCart(productData);
        }      
    }

    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
    //    setAmountInCart(0);
        setCartProducts(cartProducts);
        calcSumTotal(cartProducts);
        saveLocalStorage(cartProducts);
    }
  /*  const seEstaComprando=()=>{
        setBought(current => !current);
   }*/

    function buyCart(newOrder,orderID){
       // seEstaComprando() 
       setBought() // solucionar porque no funcioa
        console.log("estoy mostrando si se compro o no...",bought)
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
       // amountInCart,
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