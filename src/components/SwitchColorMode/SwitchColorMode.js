import * as React from 'react';
import "./SwitchColorMode.css"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';

export default function BasicSwitches( {theme, themeToggler}) {
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