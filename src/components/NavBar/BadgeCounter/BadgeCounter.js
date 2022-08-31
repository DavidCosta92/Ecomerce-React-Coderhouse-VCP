import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./BadgeCounter.css";

import { useContext, useEffect } from "react";
import { CartContext } from '../../../context/CartContext';


export default function ColorBadge() {  
  const {totalAmountInCart,cartProducts} = useContext(CartContext);

  const renderAmount=()=>{
    let totalAmount;
    cartProducts.map((p)=>{
      totalAmount+=p.inCart;
      console.log("estoy en el map.. con un total de", totalAmount)
      console.log("por alguna puta raozn me da que es nan, pero si pregunto el tipo me da =>", typeof(totalAmount))
      console.log("incluso luego de parsearlo.., sigue dando NAN", parseInt(totalAmount))
    })
   
    
    return (
      <Badge badgeContent={totalAmount}>
        <ShoppingCartIcon color="action" />
      </Badge>
    );
  }
/*
  useEffect(()=>{
    renderAmount()
  }, [totalAmountInCart])
*/
  return (
    <Stack spacing={2} direction="row" className="badgeConter">
      {renderAmount()}
    </Stack>
  );
}
