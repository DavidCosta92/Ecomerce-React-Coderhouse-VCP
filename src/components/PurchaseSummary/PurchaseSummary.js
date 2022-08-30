import "./PurchaseSummary.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom"


const PurchaseSummary = () =>{

    const {orderID,order} =useContext(CartContext);

    const {items,total,date, buyer}=order;

    return (
        <div>
            <div className="cartelSucces">
                <p>¡Ya estamos preparando tu compra!</p>
                <p>Revisa tu casilla de email, recibiras un link de pago con mas instrucciones</p>
                <p>♥ Gracias por elegirnos ♥</p>
            </div>
            <div className="tableContainer">   
                <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 700 }} aria-label="spanning table" className="table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left" colSpan={4} className="tableTitle">
                                    Resumen de compra
                                    </TableCell>
                                    <TableCell align="center" colSpan={2}>
                                    Usuario: {buyer.email}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} align="center">Articulos</TableCell>
                                    <TableCell align="center">Talle</TableCell>
                                    <TableCell align="center">Cant.</TableCell>
                                    <TableCell align="center">Precio UN</TableCell>
                                    <TableCell align="center">Subtotal</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    items.map((product) => (
                                        <TableRow key={product.title}>
                                        <TableCell>
                                            <div className="imgCheckout">
                                                <Link to={`/Products/Id=${product.id}`}>
                                                    <img src={`../assets/imagenes/${product.srcA}`}/>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/Products/Id=${product.id}`}>{product.title}</Link>
                                        </TableCell>
                                        <TableCell align="center">{product.size}</TableCell>
                                        <TableCell align="center">{product.amount}</TableCell>
                                        <TableCell align="center">{product.unitPrice}</TableCell>
                                        <TableCell align="center">{product.TotalPrice}</TableCell>
                                        </TableRow>
                                    )) 
                                }
                                <TableRow>
                                    <TableCell colSpan={4}>Comprado {date}, pago elegido: {buyer.payMethod}</TableCell>
                                    <TableCell align="center" colSpan={1} className="tableTitle">Total</TableCell>
                                    <TableCell align="center" colSpan={2} className="tableTitle">{total}</TableCell>                                    
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={1}>ID compra: {orderID}</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table> 
                </TableContainer>
            </div>
        </div>
    )
}

export default PurchaseSummary;