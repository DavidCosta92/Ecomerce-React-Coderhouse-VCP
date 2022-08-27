import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./CartWidget2.css";
import { Link } from '@mui/material';
import ColorBadge from './BadgeCounter/BadgeCounter.js';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TemporaryDrawer() {
    const { cartProducts, clearCart, addProductToCart,removeUnitFromCart,removeAllUnitsFromCart, totalAmountInCart} = useContext(CartContext)


    function calcular(){
        let sumatoria=0;
        cartProducts.map((p)=>{
            sumatoria+=p.price*p.inCart
        })
        return sumatoria
    }


  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <p className='totalPriceWidget'>Carrito</p>
      <Divider />
        {cartProducts.map((product) => (        
          <ListItem key={product.title} disablePadding>
            <ListItemButton>
                <img src={`/assets/imagenes/${product.srcA}`} className="productImgCartWidget"/>
                <p className="titleWidget">{product.title}</p>
              <div>
                <p className="priceWidget">$ {product.inCart*product.price}</p>
                <p className="cantWidget">Cant. {product.inCart}</p>
              </div>
              <div className='widgetAction'>
                <AddIcon className="WidgetAdd" onClick={()=> addProductToCart(product,1)}/>
                <RemoveIcon className="WidgetRemove" onClick={()=> removeUnitFromCart(product)}/>
                <DeleteIcon className="WidgetClear" onClick={()=> removeAllUnitsFromCart(product)}/>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {cartProducts.length > 0 && <Divider />}
      <List>       
        {cartProducts.length > 0 && 
        (    <ListItem key={"text"} disablePadding>
                <ListItemButton>
                <p className="totalPriceWidget">{`Precio total $${calcular()}`}</p>
                </ListItemButton>
            </ListItem> )         
        }        
        {cartProducts.length > 0 && 
        (<ListItem key={"text"} disablePadding>
              <ListItemText primary={cartProducts.length>0&& <Link to="/Checkout"><button className="comprarCarrito" /* onClick={() => setAnchorEl(null)}*/>COMPRAR CARRITO</button></Link>} />
          </ListItem>  )        
        }
        {<ListItem key={"text"} disablePadding>
              <ListItemText primary= {cartProducts.length>0? <button className="eliminarCarrito" onClick={() => clearCart()}>Eliminar carrito</button>:<div className="carritoVacio"><p>¡El carrito esta vacio!</p></div>} />
          </ListItem>          
        }
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ColorBadge totalAmountInCart={totalAmountInCart}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  );
}
