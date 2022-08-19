import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import {useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';


const CartWidget =()=>{
    const { cartProducts, clearCart, addProductToCart,removeUnitFromCart,removeAllUnitsFromCart, totalAmountInCart} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function calcular(){
        let sumatoria=0;
        cartProducts.map((p)=>{
            sumatoria+=p.price*p.inCart
        })
        return sumatoria
    }
        
    
return(
    <div className='cart-widget'>
        <ShoppingCartIcon 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        />
        {totalAmountInCart>0&&<p className="contadorProductosCarrito">{totalAmountInCart}</p>}
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
        {cartProducts.map((product) => {
                return(
                    <div className='item-cart-product widgetCart' key={product.id}>
                        <img src={`/assets/imagenes/${product.srcA}`} className="productImgCartWidget"  alt="" />
                        <div className='cart-product__details'>
                            <p className="widgetTitle">{product.title}</p>
                            <p className="widgetSize">Talla: Pendiente</p>
                            <p>Cantidad : {product.inCart}</p>
                            <p className="widgetPrice">$ {product.price*product.inCart}</p>
                        </div>
                        <div className='cart-product__action'>
                            <AddIcon className="WidgetAdd" onClick={()=> addProductToCart(product,1)}/>
                            <RemoveIcon className="WidgetRemove" onClick={()=> removeUnitFromCart(product)}/>
                            <DeleteIcon className="WidgetClear" onClick={()=> removeAllUnitsFromCart(product)}/>
                        </div>
                    </div>
                )
            })}
            {/* REVISAR LOS TERNARIOS, ESTA FEO ESTA PARTE DEL CODIGO  */}
            {cartProducts.length>0&&<p className="precioTotalWidget">Precio actual carrito ${calcular()}</p>}
            {cartProducts.length>0&&  <Link to="/Checkout"><button className="comprarCarrito" onClick={() => setAnchorEl(null)}>COMPRAR CARRITO</button></Link>}
            {cartProducts.length>0? <button className="eliminarCarrito" onClick={() => clearCart()}>Eliminar carrito</button>:<div className="carritoVacio"><p>¡El carrito esta vacio!</p></div>}           
        </Menu>
    </div>
)
}

export default CartWidget;
