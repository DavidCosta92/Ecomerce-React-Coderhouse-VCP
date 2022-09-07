import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./BadgeCounter.css";

import { useContext } from "react";
import { CartContext } from '../../../context/CartContext';



export default function ColorBadge() {  
  const {totalAmountInCart} = useContext(CartContext);
// badgeContentVCP badgeConter
  return (
    <Stack spacing={2} direction="row" className="">
       
      <Badge badgeContent={totalAmountInCart} className='badgeContentVCP'>
      <ShoppingCartIcon color="action" className='shoppingCartIconVCP'/>
      </Badge>
      
    </Stack>
  );
}
