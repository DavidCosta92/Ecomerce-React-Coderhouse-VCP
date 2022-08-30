import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import "./ToggleButtonGroup.css"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CategoryIcon from '@mui/icons-material/Category';


export default function ColorToggleButton({orderProductsBy}) {
  const handleChange = (event, newOrder) => {
    orderProductsBy(newOrder);
  };

  return (
    <div className='toggleContainer'>
        <ToggleButtonGroup
        color="primary"
        value={""}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
        <ToggleButton value="priceAsc">Precio <KeyboardDoubleArrowUpIcon/></ToggleButton>
        <ToggleButton value="priceDesc">Precio <KeyboardDoubleArrowDownIcon/></ToggleButton>
        <ToggleButton value="category">Categorias <CategoryIcon/></ToggleButton>
        </ToggleButtonGroup>
    </div>
  );
}
