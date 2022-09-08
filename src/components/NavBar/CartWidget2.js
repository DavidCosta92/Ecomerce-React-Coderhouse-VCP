import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import "./CartWidget2.css";
import { Link } from "react-router-dom";
import ColorBadge from './BadgeCounter/BadgeCounter.js';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({right: false});
    const {cartProducts,clearCart, addProductToCart,removeUnitFromCart,removeAllUnitsFromCart,totalPrice} = useContext(CartContext);

    function renderProductsWidget(){   
      if(cartProducts){
        return(
          <>
            <p className='totalPriceWidget'>Carrito</p>
            <Divider />   
              {cartProducts.map((product) => (  
                <div className='productCartWidget'>   
                <Divider />                  
                <ListItem key={product.title} disablePadding>
                  <ListItemButton>
                      <img src={`/assets/imagenes/${product.srcA}`} className="productImgCartWidget" alt={product.textoAlt}/>
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
                </div>
              ))}
            </>
          )
        }
      }

      function renderActionsCart(){
        if(cartProducts){
          if(cartProducts.length>0){
            return(
              <>
                <Divider />
                <ListItem key={"totalPriceWidget"} disablePadding>
                  <ListItemButton>
                  <p className="totalPriceWidget">{`Precio total $${totalPrice}`}</p>
                  </ListItemButton>
                </ListItem> 
                <div id='btnWidget'>
                  <ListItem key={"comprarCarrito"} disablePadding className='containerBtnComprarCarrito'> 
                    <Link to="/Checkout"><button className="comprarCarrito" onClick={()=>setState({right: false})}>COMPRAR CARRITO</button></Link>
                  </ListItem> 
                  <ListItem key={"eliminarCarrito"} disablePadding className='containerBtnEliminarCarrito'>
                    <button className="eliminarCarrito" onClick={() => clearCart()}>Eliminar carrito</button>
                  </ListItem>
                </div>
              </>     
            )
          } else{
            return(             
              <div className="carritoVacio"><p>¡Aun no has agregado productos al carrito! ¿Deseas ver algunas ofertas?</p><Link to="/"><button className="comprarCarrito" onClick={()=>setState({right: false})}>Ver Ofertas</button></Link></div>
            )
          }
        }
      }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '85vw' }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='productListCartWidget'>
      {renderProductsWidget()}
      </List>
      <List>       
        {renderActionsCart()}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ColorBadge/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
            <div id="pruebaWidget">              
            {list(anchor)}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  );
}
