import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  // NAV
  .toggleTheme{
    background-color: ${({ theme }) => theme.textkWhiteBlack};
    color:${({ theme }) => theme.textBlackWhite};
  }
  //
  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root {
    color:${({ theme }) => theme.textBlackWhite};
  }
  .toggleTheme:hover svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root{
    color:${({ theme }) => theme.textkWhiteBlack};
  }
  // red footer
  .footer .contenidoFooter .redesFooter .red{
    color:${({ theme }) => theme.textBlackWhite};
  }
  .footer .contenidoFooter .redesFooter .red svg:hover{
    color:${({ theme }) => theme.textBlackWhite};
  }

  .toggleTheme:hover{
    background-color: ${({ theme }) => theme.textBlackWhite};
    color:${({ theme }) => theme.textkWhiteBlack};
  }
  .containerNav .txtNav, a#basic-nav-dropdown{
    color:${({ theme }) => theme.textBlackWhite};
  }

  .containerNav .dropdown-menu{
    background-color: ${({ theme }) => theme.backgroundNavBar};
   }

   //cartWidget
   .shoppingCartIconVCP{
    color:${({ theme }) => theme.textBlackWhite};
   }

   /*cartWidget, badge Counter*/
   #badgeContentVCP{
    color:${({ theme }) => theme.textBlackWhite};
   }

   #badgeContentVCP :hover{
    background-color:${({ theme }) => theme.btn1Hover};
   }

   #badgeContentVCP span{
    background-color:${({ theme }) => theme.brandColor};
    color:#ffffff;
   }



   .containerNav .nombreMarca{
    color:${({ theme }) => theme.textBlackWhite};
   }
   .containerNav .nombreMarca:hover{
    color:${({ theme }) => theme.brandColor};
   }


   .containerNavBarSearch .MuiInputBase-root{
    color:${({ theme }) => theme.textBlackWhite};
   }

   .containerNavBarSearch .MuiOutlinedInput-notchedOutline{
    border-color:${({ theme }) => theme.blackToBlue};
  }

  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.lupa.css-i4bv87-MuiSvgIcon-root{
    color:${({ theme }) => theme.blackToBlue};
  }


 // boton hamburg

 .navbar-light .navbar-toggler{
    color:${({ theme }) => theme.textBlackWhiteSmooth};
    border-color: ${({ theme }) => theme.textBlackWhiteSmooth}; 
    background-color: ${({ theme }) => theme.backgroundBtnHamb};

 }




  // FOOTER
  .footer{
    background-color: ${({ theme }) => theme.backgroundFooter};
  }
  .footer .tituloFooter{
    color:${({ theme }) => theme.text1};
  }

  // FORMS
  .formulario .botonEnvio{
    background-color: ${({ theme }) => theme.btn1};
  }
  .botonEnvio:hover{
    box-shadow: 1px 1px 1px 2px ${({ theme }) => theme.btn1HoverShwadow}
    color:${({ theme }) => theme.text1};
    background-color: ${({ theme }) => theme.btn1Hover};
  }

  // PRODUCTS
  .productDetails{
    box-shadow: 2px 2px 1px 1px ${({ theme }) => theme.productDetailsCardShadow};
    background-color: ${({ theme }) => theme.productDetailsCard};
  }
  .productDetails .stockDisponible{
    color:${({ theme }) => theme.text2SemiDisabled};
  }
  .btnsTalles button{
    background-color: ${({ theme }) => theme.backgroundBtnSize};
  }

  .btnTerminarCompra{
     background-color: ${({ theme }) => theme.backgroundBtnSize};
  }
  .btnTerminarCompra:hover, .btnTerminarCompra:focus{
    background-color: ${({ theme }) => theme.backgroundBlackWhite};
    color: ${({ theme }) => theme.backgroundWhiteBlack};
  }

  .talles p{
    color:${({ theme }) => theme.text2SemiDisabled};
  }
  .talles .btnsTalles .btnSizeDisabled:hover, .talles .btnsTalles .btnSizeDisabled:focus, .talles .btnsTalles .btnSizeDisabled:active{
    color: ${({ theme }) => theme.backgroundWhiteBlack};
  }

  .talles .btnsTalles .sizeClicked,   .talles .btnsTalles .sizeClicked:focus,   .talles .btnsTalles .sizeClicked:active{
    background-color: ${({ theme }) => theme.backgroundBlackWhite};
    color: ${({ theme }) => theme.backgroundWhiteBlack};
  }
  .talles .btnsTalles button:hover, .productDetails .talles .btnsTalles button:focus{
    background-color: ${({ theme }) => theme.backgroundBlackWhite};
    color: ${({ theme }) => theme.backgroundWhiteBlack};
  }
  .productCard{
    color: ${({ theme }) => theme.textWhiteBlackSmooth};
  }
  .productCard .tituloProducto{
    color: ${({ theme }) => theme.textWhiteBlackSmooth};
  }
  .btnBuy{
    color: ${({ theme }) => theme.textBlackWhite};
    border: 3px solid ${({ theme }) => theme.textBlackWhite};
  }
  .offer p{
    color:${({ theme }) => theme.textPriceAnima}
  }
  .offer, .offerPrice{
    border: ${({ theme }) => theme.textPriceAnima} 2px solid;
  }
  .offerPrice p{
    color:${({ theme }) => theme.textPriceAnima}
  }




  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type){
  
  }

  /* togle de ordenamiento productos */

  .toggleContainer #toggleButtonGroupOrderProducts {
    border: 1px solid ${({ theme }) => theme.smoothLine};
  }
  .toggleContainer #toggleButtonGroupOrderProducts button{
    color:${({ theme }) => theme.textBlackWhite}
  }
  .toggleContainer #toggleButtonGroupOrderProducts button:hover{
    background-color: ${({ theme }) => theme.btn1Hover};
  }

  .formularioContacto input{
    color:${({ theme }) => theme.textBlackWhiteSmooth};
    background-color:${({ theme }) => theme.backgroundFooter};
  }

  .tableCheckout  #tablaProductosCheckout, .tableContainer #tablaProductosResumenCompra{
    background-color:${({ theme }) => theme.checkOutBackground};
  }

  .tableContainer .table p{
    color:${({ theme }) => theme.textBlackWhite};
  }
  #btnVaciarCarrito{
    color:${({ theme }) => theme.textWhiteBlackSmooth};
  }

  .MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight{
    background-color:${({ theme }) => theme.cartWidgetBkg};
    color:${({ theme }) => theme.textBlackWhite};
  }

  .comprarCarrito, .eliminarCarrito{
    color:${({ theme }) => theme.textBlackWhite};

  }

// PURCHASE FORM
.formMediosPagos .css-u4tvz2-MuiFormLabel-root{
  color:${({ theme }) => theme.textBlackWhite};
}


// btn vaciar carrito
#btnVaciarCarrito button{
  color:${({ theme }) => theme.textBlackWhite};
}


// modal vaciar carrito
.MuiBox-root.css-1wnsr1i{
  background-color: ${({ theme }) => theme.backgroundWhiteBlack};
}





MODIFICACIONES DEPLOY
// probando organizador de productos....
/*   button.MuiButtonBase-root.MuiToggleButton-root.MuiToggleButton-sizeMedium.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal {
  color: ${({ theme }) => theme.textBlackWhite};
}  */




  `
