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

import "./Checkout.css"



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';




const Checkout = () =>{
    
    const { cartProducts, clearCart, addProductToCart,removeUnitFromCart,removeAllUnitsFromCart, amountInCart} = useContext(CartContext)
    
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
        <div className="tableContainer">   
            <p className="tituloCarrito"> Carrito</p>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700 }} aria-label="spanning table" className="table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                        Detalles del carrito
                        </TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio Un</TableCell>
                        <TableCell align="right">Subtotal</TableCell>.
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        cartProducts.map((product) => (
                            <TableRow key={product.title}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell align="right">{product.inCart}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.price*product.inCart}</TableCell>
                            <TableCell align="right">
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
                        <TableCell align="right">{subtotal(cartProducts)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>I.V.A.</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right">{Math.round(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{invoiceTotal}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table> 
            </TableContainer>



        </div>
    )
}
export default Checkout;