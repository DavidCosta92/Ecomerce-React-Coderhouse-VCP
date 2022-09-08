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

    const {items,total,date, buyer, finalPrice,payMethod}=order;

    return (
        <div>
            <div className="cartelSucces">
                <p>¡Ya estamos preparando tu compra!</p>
                <p>Revisa tu casilla de email, recibiras un link de pago con mas instrucciones</p>
                <p>♥ Gracias por elegirnos ♥</p>
            </div>
            <div className="tableContainer">   
                <TableContainer component={Paper} id="tablaProductosResumenCompra">
                            <Table sx={{ minWidth: 700 }} aria-label="spanning table" className="table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left" colSpan={4} className="tableTitle">
                                    <p>Resumen de compra</p>
                                    </TableCell>
                                    <TableCell align="center" colSpan={2}>
                                    <p>Usuario: {buyer.email}</p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} align="center"> <p>Articulos</p></TableCell>
                                    <TableCell align="center"> <p>Talle</p></TableCell>
                                    <TableCell align="center"> <p>Cant.</p></TableCell>
                                    <TableCell align="center"> <p>Precio UN</p></TableCell>
                                    <TableCell align="center"> <p>Subtotal</p></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    items.map((product) => (
                                        <TableRow key={product.title}>
                                        <TableCell>
                                            <div className="imgCheckout">
                                                <Link to={`/Products/Id=${product.id}`}>
                                                    <img src={`../assets/imagenes/${product.srcA}`} alt={product.textoAlt}/>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/Products/Id=${product.id}`}> <p>{product.title}</p></Link>
                                        </TableCell>
                                        <TableCell align="center"> <p>{product.size}</p></TableCell>
                                        <TableCell align="center"> <p>{product.amount}</p></TableCell>
                                        <TableCell align="center"> <p>{product.unitPrice}</p></TableCell>
                                        <TableCell align="center"> <p>{product.TotalPrice}</p></TableCell>
                                        </TableRow>
                                    )) 
                                }
                                <TableRow>
                                    <TableCell colSpan={4}><p>Fecha compra: {date}</p> </TableCell>
                                    <TableCell align="center" colSpan={1}> <p>SubTotal ${total} (Descuento: -${total-finalPrice})</p></TableCell>
                                    <TableCell align="center" colSpan={2} className="tableTitle"> <p>Precio Final ${finalPrice}</p></TableCell>                                    
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}> <p>ID compra: {orderID}</p></TableCell>
                                    <TableCell colSpan={2}> </TableCell>
                                    <TableCell align="center" colSpan={2}> <p>Metodo de pago elegido: {payMethod}</p></TableCell>   
                                </TableRow>
                                </TableBody>
                            </Table> 
                </TableContainer>
            </div>
        </div>
    )
}

export default PurchaseSummary;