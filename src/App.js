import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/home';
import Ofertas from './pages/ofertas';
import Categorias from './pages/categorias';
import Remeras from './pages/remeras';
import Pantalones from './pages/pantalones';
import Camperas from './pages/camperas';
import Nosotros from './pages/nosotros';
import Error404 from './pages/error404';
import Detail from './pages/detail.js';



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos/id=:id' element={<Detail/>}/>
          <Route path='/ofertas' element={<Ofertas/>}/>
          <Route path='/categorias' element={<Categorias/>}/>
          <Route path='/remeras' element={<Remeras/>}/>
          <Route path='/pantalones' element={<Pantalones/>}/>
          <Route path='/camperas' element={<Camperas/>}/>
          <Route path='/aboutUs' element={<Nosotros/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>


  );
}
  
export default App;
