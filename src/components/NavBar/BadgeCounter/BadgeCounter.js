import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./BadgeCounter.css";

export default function ColorBadge({totalAmountInCart}) {
  return (
    <Stack spacing={2} direction="row" className="badgeConter">
      <Badge badgeContent={totalAmountInCart}>
        <ShoppingCartIcon color="action" />
      </Badge>
    </Stack>
  );
}
