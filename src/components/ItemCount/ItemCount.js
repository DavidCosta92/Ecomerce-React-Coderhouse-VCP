import "./ItemCount.css";
import { useState } from "react";


const ItemCounter=({stock, unitsSelected})=>{
    const [ItemCounter, setItemCounter]= useState(1);

    const addUnit = ()=>{
        if(ItemCounter<stock) setItemCounter(ItemCounter+1);

    }
    const subtractUnit = ()=>{
        if(ItemCounter>1) setItemCounter(ItemCounter-1);
    }

    const onAdd =()=>{
        unitsSelected(ItemCounter);
    }

    return(
        <>
            <div className="ItemCounter">
                <button className="restarUnidad" onClick={subtractUnit}>-</button>
                <p className="cantidadUnidad">{ItemCounter}</p>
                <button className="sumarUnidad" onClick={addUnit}>+</button>
            </div>
            <button className="btnBuy" onClick={onAdd}>Agregar!</button> 
        </>
    )
}
export default ItemCounter;