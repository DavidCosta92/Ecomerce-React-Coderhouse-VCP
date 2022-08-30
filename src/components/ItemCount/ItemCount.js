import "./ItemCount.css";
import { useState} from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import BasicAlerts from "../BasicAlerts/BasicAlerts";


const ItemCounter=({unitsSelected, productData})=>{
    const {setTotalAmountInCart,totalAmountInCart,addProductToCart,cartProducts} = useContext(CartContext);
    const {stockXS,stockS,stockM,stockL,stockXL} =productData;
    const [ItemCounter, setItemCounter]= useState(1);
    const [size, setSize] = useState("");
    const [sizeStock, setSizeStock] =useState();
    const [alertAdd, setAlertAdd]= useState("");

    const addUnit = ()=>{
        if(ItemCounter<sizeStock) setItemCounter(ItemCounter+1);
    }
    const subtractUnit = ()=>{
        if(ItemCounter>1) setItemCounter(ItemCounter-1);
    }

    function onAdd (productData,ItemCounter){
        unitsSelected(ItemCounter);
        addProductToCart(productData,ItemCounter,size);
        setTotalAmountInCart(totalAmountInCart+ItemCounter);
        setAlertAdd("si"); /// no funciona.. no esta seteando el estado
        //console.log(alertAdd)
    }

    const handleClickTalle =(e)=>{
        setSize(e.target.value);
        switch (e.target.value){
            case "XS":
                setSizeStock(stockXS);
                setItemCounter(1)
                break;
            case "S":
                setSizeStock(stockS);
                setItemCounter(1)
                break;
            case "M":
                setSizeStock(stockM);
                setItemCounter(1)
                break;
            case "L":
                setSizeStock(stockL);
                setItemCounter(1)
                break;
            case "XL":
                setSizeStock(stockXL);
                setItemCounter(1)
                break;
            default :
                setSizeStock("");
                setItemCounter();

        }
    }
    return(
        <>
            <div className="talles">
                <p>Elegi tu talle</p>
                <div className="btnsTalles">
                    {stockXS>0?<button onClick={handleClickTalle} value="XS" className={size==="XS"&& "sizeClicked"}>XS</button>:<button className="btnSizeDisabled">XS</button>}
                    {stockS>0?<button onClick={handleClickTalle} value="S" className={size==="S"&& "sizeClicked"}>S</button>:<button className="btnSizeDisabled">S</button>}
                    {stockM>0?<button onClick={handleClickTalle} value="M" className={size==="M"&& "sizeClicked"}>M</button>:<button className="btnSizeDisabled">M</button>}
                    {stockL>0?<button onClick={handleClickTalle} value="L" className={size==="L"&& "sizeClicked"}>L</button>:<button className="btnSizeDisabled">L</button>}
                    {stockXL>0?<button onClick={handleClickTalle} value="XL" className={size==="XL"&& "sizeClicked"}>XL</button>:<button className="btnSizeDisabled">XL</button>}
                </div>
                <p className="stockDisponible"> {size!=="" && `Stock disponible en talle ${size}: ${sizeStock}`}</p>
            </div>
            <div className="ItemCounter">
                <button className="restarUnidad" onClick={subtractUnit}>-</button>
                    <p className="cantidadUnidad">{ItemCounter}</p>
                <button className="sumarUnidad" onClick={addUnit}>+</button>
            </div>
            {size===""?<p>Seleccione un talle para continuar</p> : <button className="btnBuy" onClick={()=>onAdd(productData,ItemCounter,size)}>¡Agregar prenda en talle {size} !</button>}
            {alertAdd==="si"&&<BasicAlerts type={true} message={`${productData.title} fue agregado al carrito`}/>}
        </>
    )
}
export default ItemCounter;
