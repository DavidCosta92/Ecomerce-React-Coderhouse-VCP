import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Category from './pages/Category';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/error404';
import Detail from './pages/detail.js';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';
import SearchResults from './pages/SearchResults';
import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {  

  let themePreference;
  JSON.parse(localStorage.getItem("userThemePreference"))&& (themePreference=JSON.parse(localStorage.getItem("userThemePreference")))
  !JSON.parse(localStorage.getItem("userThemePreference"))&& ( themePreference='light')
  localStorage.setItem("userThemePreference",JSON.stringify(themePreference));
  
  const [theme, setTheme] = useState(themePreference);
  const themeToggler = () => {
    theme === 'light' ? localStorage.setItem("userThemePreference",JSON.stringify('dark')): localStorage.setItem("userThemePreference",JSON.stringify('light'));
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <BrowserRouter>
      <CartProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles/>
              <div className="App">
                <Nav theme={theme} themeToggler= {themeToggler}/>          
                  <Routes>
                  <Route path='/'element={<Home/>}/>
                  <Route path='/Products/Id=:id' element={<Detail/>}/>
                  <Route path='Categories/:Category' element={<Category/>}/>
                  <Route path='search/search=:search' element={<SearchResults/>}/>
                  <Route path='/AboutUs' element={<AboutUs/>}/>
                  <Route path='/Checkout' element={<Checkout/>}/>
                  <Route path='*' element={<Error404/>}/>
                </Routes>
                <Footer/>
              </div>
        </>
    </ThemeProvider>

    </CartProvider>
    </BrowserRouter>


  );
}
  
export default App;
