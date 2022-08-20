import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {useState, useEffect } from 'react'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Home from "./Home";
import "./Checkout.css"
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';




const Checkout = () =>{
    
    const { cartProducts, clearCart, addProductToCart,removeUnitFromCart,removeAllUnitsFromCart, amountInCart,bought} = useContext(CartContext)
    
    useEffect(()=>{
    }, [amountInCart])

function subtotal(products) {
    let subtotal=0;
    products.map((product)=>{
        subtotal+=product.price * product.inCart
    })
  return subtotal;
}


const TAX_RATE = 0.21;
const invoiceTaxes = TAX_RATE * subtotal(cartProducts);
const invoiceTotal = invoiceTaxes + subtotal(cartProducts);

    return (
        <>  
        {(cartProducts.length==0 && bought===false)? 
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
                                    <TableCell align="center" colSpan={3}>
                                    Detalles del carrito
                                    </TableCell>
                                    <TableCell align="center" colSpan={2}>Precio</TableCell>
                                    <TableCell align="center">Acciones</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Articulo</TableCell>
                                    <TableCell align="center">Cant.</TableCell>
                                    <TableCell align="center">Precio Un</TableCell>
                                    <TableCell align="center">Subtotal</TableCell>.
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    cartProducts.map((product) => (
                                        <TableRow key={product.title}>
                                        <TableCell>
                                            <div className="imgCheckout">
                                                <img src={`../assets/imagenes/${product.srcA}`}/>
                                            </div>
                                        </TableCell>
                                        <TableCell>{product.title}</TableCell>
                                        <TableCell align="center">{product.inCart}</TableCell>
                                        <TableCell align="center">{product.price}</TableCell>
                                        <TableCell align="center">{product.price*product.inCart}</TableCell>
                                        <TableCell align="center">
                                            <AddIcon className="btnAdd" onClick={()=>addProductToCart(product,1)}/>
                                            <RemoveIcon className="btnRemove" onClick={()=>removeUnitFromCart(product)}/>
                                            <DeleteIcon className="btnClear" onClick={()=>removeAllUnitsFromCart(product)}/>
                                        </TableCell>
                                        </TableRow>
                                    )) 
                                }

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="center" colSpan={3}>{subtotal(cartProducts)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>I.V.A.</TableCell>
                                    <TableCell align="center" >{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="center" colSpan={3}>{Math.round(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell align="center">{invoiceTotal}</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table> 
                        </TableContainer>
                    </div>
                    <PurchaseForm/>
            </>
            ) : (
                <div className="success">
                    <p>COMPRADO EXITOSAMENTE</p>
                    <div>
                        MOSTRAR RESUMEN DE COMPRA...
                    </div>
                </div>
            )
        )
            }
            
        </>
    )
}
export default Checkout;