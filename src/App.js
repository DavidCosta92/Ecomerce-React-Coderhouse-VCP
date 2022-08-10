import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Category from './Pages/Category';
import AboutUs from './Pages/AboutUs';
import Error404 from './Pages/Error404';
import Detail from './Pages/Detail.js';
import Footer from './components/Footer/Footer';
import Checkout from './Pages/Checkout';
import CartProvider from './context/CartContext';

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
