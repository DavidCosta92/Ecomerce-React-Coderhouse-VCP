import * as React from 'react';
import Switch from '@mui/material/Switch';
import "./SwitchColorMode.css"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches( {theme, themeToggler}) {

  // {theme==="light"? (<><Brightness3Icon onClick={themeToggler}/><p>DarkMode</p> </>) : (<><Brightness7Icon onClick={themeToggler}/><p>LightkMode</p></>)}

  return (
    <>
      {theme==="light" &&(
        <div className='toggleTheme' onClick={themeToggler}>
          <Brightness3Icon onClick={themeToggler}/>
          <p>DarkMode</p> 
        </div>
         )}

      {theme==="dark" &&(
        <div className='toggleTheme' onClick={themeToggler}>
          <Brightness7Icon/>
          <p>LightMode</p> 
        </div>
         )}    
    </>  
  );
}