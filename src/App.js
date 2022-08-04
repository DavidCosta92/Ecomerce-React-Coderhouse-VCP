import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Categorias from './pages/categorias';
import Nosotros from './pages/nosotros';
import Error404 from './pages/error404';
import Detail from './pages/detail.js';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos/id=:id' element={<Detail/>}/>
          <Route path='categorias/:categoriaElegida' element={<Categorias/>}/>
          <Route path='/aboutUs' element={<Nosotros/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>


  );
}
  
export default App;
