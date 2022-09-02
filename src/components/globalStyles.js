import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .toggleTheme{
    background-color: ${({ theme }) => theme.toggleBkg};
    color:${({ theme }) => theme.toggleBkgP};
  }
  .toggleTheme svg{
    color:${({ theme }) => theme.toggleBkgP};
  }
  .toggleTheme:hover{
    background-color: ${({ theme }) => theme.toggleBkgHover};
  }
  .footer{
    background-color: ${({ theme }) => theme.backgroundFooter};
  }
  .footer .tituloFooter{
    color:${({ theme }) => theme.text1};
  }
  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root {
    color:${({ theme }) => theme.svgFooter};
  }
  .formulario .botonEnvio{
    background-color: ${({ theme }) => theme.btn1};
  }
  .botonEnvio:hover{
    box-shadow: 1px 1px 1px 2px ${({ theme }) => theme.btn1HoverShwadow}
    color:${({ theme }) => theme.text1};
    background-color: ${({ theme }) => theme.btn1Hover};
  }
  .productDetails{
    box-shadow: 2px 2px 1px 1px ${({ theme }) => theme.productDetailsCardShadow};;
    background-color: ${({ theme }) => theme.productDetailsCard};
  }
  .productDetails .stockDisponible{
    color:${({ theme }) => theme.text2SemiDisabled};
  }
  .btnTerminarCompra{
     color: ${({ theme }) => theme.textBlackWhite};
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
  button.MuiButtonBase-root.MuiToggleButton-root.MuiToggleButton-sizeMedium.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.css-d9c359-MuiButtonBase-root-MuiToggleButton-root {
    color: ${({ theme }) => theme.textBlackWhite};
  }
  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type){
  
  }

  .MuiToggleButtonGroup-root.css-1gjgmky-MuiToggleButtonGroup-root {
    border: 1px solid ${({ theme }) => theme.textBlackWhiteSmooth};
  }
  .MuiToggleButtonGroup-root.css-1gjgmky-MuiToggleButtonGroup-root :hover{
    background-color: ${({ theme }) => theme.btn1Hover};
   
  }

  .formularioContacto input{
    color:${({ theme }) => theme.textBlackWhiteSmooth};
    background-color:${({ theme }) => theme.backgroundFooter};
  }

  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-11xur9t-MuiPaper-root-MuiTableContainer-root{
    background-color:${({ theme }) => theme.checkOutBackground};
  }

  .tableContainer .table p{
    color:${({ theme }) => theme.textBlackWhite};
  }
  .btnVaciarCarrito{
    color:${({ theme }) => theme.textWhiteBlackSmooth};
  }

  `
