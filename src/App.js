import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Category from './pages/Category';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404';
import Detail from './pages/Detail.js';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/products/id=:id' element={<Detail/>}/>
          <Route path='categories/:category' element={<Category/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>


  );
}
  
export default App;
