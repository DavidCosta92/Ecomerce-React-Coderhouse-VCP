import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from 'react'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Home from "./home";
import "./css/Checkout.css"
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";
import PurchaseSummary from "../components/PurchaseSummary/PurchaseSummary";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import DangerousIcon from '@mui/icons-material/Dangerous';
import {Link} from "react-router-dom"





const Checkout = () =>{
    const { cartProducts,addUnitsToCart,removeUnitFromCart,removeAllUnitsFromCart, amountInCart,bought,totalPrice,warningClearCart} = useContext(CartContext)
   /* 
    useEffect(()=>{
    }, [amountInCart])
*/
    
    return (
        <>  
        {(cartProducts.length===0 && bought===false)? 
        (
        <div><p className="textoCarroVacio">¡Aun no has agregado productos al carrito! ¿Deseas ver algunas ofertas?</p><Home/></div>
        ) : (
            cartProducts.length!==0? 
            (
                <>
                <div className="tableContainer">   
                        <p className="tituloCarrito"> Carrito</p>
                        
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 700 }} aria-label="spanning table" className="table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left" colSpan={4} className="tableTitle">
                                    <p>Detalles del carrito</p>
                                    </TableCell>
                                    <TableCell align="center" colSpan={2}><p>Precio</p></TableCell>
                                    <TableCell align="center"><p>Acciones</p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}><p>Articulo</p></TableCell>
                                    <TableCell align="center"><p>Talle</p></TableCell>
                                    <TableCell align="center"><p>Cant.</p></TableCell>
                                    <TableCell align="center"><p>Precio Un</p></TableCell>
                                    <TableCell align="center"><p>Subtotal</p></TableCell>.
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    cartProducts.map((product) => (
                                        <TableRow key={product.title}>
                                        <TableCell>
                                        <Link to={`/Products/Id=${product.id}`}>
                                            <div className="imgCheckout">
                                                <img src={`../assets/imagenes/${product.srcA}`} alt={`${product.textoAlt}`}/>
                                            </div>
                                        </Link>
                                        </TableCell>
                                        <TableCell><p>{product.title}</p></TableCell>
                                        <TableCell align="center"><p>{product.size}</p></TableCell>
                                        <TableCell align="center"><p>{product.inCart}</p></TableCell>
                                        <TableCell align="center"><p>{product.price}</p></TableCell>
                                        <TableCell align="center"><p>{product.price*product.inCart}</p></TableCell>
                                        <TableCell align="center">
                                            <AddIcon className="btnAdd" onClick={()=>addUnitsToCart(product,1)}/>
                                            <RemoveIcon className="btnRemove" onClick={()=>removeUnitFromCart(product)}/>
                                            <DeleteIcon className="btnClear" onClick={()=>removeAllUnitsFromCart(product)}/>
                                        </TableCell>
                                        </TableRow>
                                    )) 
                                }

                                <TableRow>
                                    <TableCell colSpan={5} className="tableTitle"><p>Total</p></TableCell>
                                    <TableCell align="center" className="tableTitle"><p>{totalPrice}</p></TableCell>
                                    <TableCell align="center" className="tableTitle"><button className="btnVaciarCarrito" onClick={()=>warningClearCart()}>Vaciar Carrito <DangerousIcon/></button></TableCell>
                                    <TableCell ></TableCell>
                                </TableRow>
                                </TableBody>
                            </Table> 
                        </TableContainer>
                    </div>
                    <PurchaseForm/>             
            </>
            ) : (
             <PurchaseSummary/>
            )
        )
            }
            
        </>
    )
}
export default Checkout;