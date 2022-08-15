import "./ItemCount.css";
import { useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import SizeSelector from "../SizeSelector/SizeSelector";


const ItemCounter=({unitsSelected, productData})=>{
    const [ItemCounter, setItemCounter]= useState(1);

    const {setTotalAmountInCart,totalAmountInCart,addProductToCart, calcSumTotal} = useContext(CartContext);

    const addUnit = ()=>{
        if(ItemCounter<productData.stock) setItemCounter(ItemCounter+1);

    }
    const subtractUnit = ()=>{
        if(ItemCounter>1) setItemCounter(ItemCounter-1);
    }

    function onAdd (productData,ItemCounter){
        unitsSelected(ItemCounter);
        addProductToCart(productData,ItemCounter);
        setTotalAmountInCart(totalAmountInCart+ItemCounter);
    }


    return(

        <>
            <SizeSelector/>
            <p className="stockDisponible">Stock disponible: {productData.stock}</p>
            <div className="ItemCounter">
                <button className="restarUnidad" onClick={subtractUnit}>-</button>
                <p className="cantidadUnidad">{ItemCounter}</p>
                <button className="sumarUnidad" onClick={addUnit}>+</button>
            </div>
            <button className="btnBuy" onClick={()=>onAdd(productData,ItemCounter)}>¡Agregar al carrito!</button>
            
        </>
    )
}
export default ItemCounter;

/* onClick={()=>addProductToCart(product,1)}*/