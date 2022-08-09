import "./ItemCount.css";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import SizeSelector from "../SizeSelector/SizeSelector";


const ItemCounter=({unitsSelected, productData})=>{
    const [ItemCounter, setItemCounter]= useState(1);

    const {addProductToCart} = useContext(CartContext);

    const addUnit = ()=>{
        if(ItemCounter<productData.stock) setItemCounter(ItemCounter+1);

    }
    const subtractUnit = ()=>{
        if(ItemCounter>1) setItemCounter(ItemCounter-1);
    }

    const onAdd =()=>{
        unitsSelected(ItemCounter);
        addProductToCart(productData,ItemCounter);        
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
            <button className="btnBuy" onClick={onAdd}>¡Agregar al carrito!</button>
        </>
    )
}
export default ItemCounter;