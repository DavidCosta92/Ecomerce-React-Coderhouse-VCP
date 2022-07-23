import "./ItemCount.css";
import { useState } from "react";

const ItemCounter=({stockDisponible})=>{
    const [ItemCounter, setItemCounter]= useState(1);

    const sumarUnidad = ()=>{
        if(ItemCounter<stockDisponible) setItemCounter(ItemCounter+1);

    }
    const restarUnidad = ()=>{
        if(ItemCounter>1) setItemCounter(ItemCounter-1);
    }

    return(
        <div className="ItemCounter">
            <button className="restarUnidad" onClick={restarUnidad}>-</button>
            <p className="cantidadUnidad">{ItemCounter}</p>
            <button className="sumarUnidad" onClick={sumarUnidad}>+</button>

        </div>
    )
}
export default ItemCounter;