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

function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Nav/>
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
      </CartProvider>
    </BrowserRouter>


  );
}
  
export default App;
