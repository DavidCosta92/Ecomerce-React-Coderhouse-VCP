import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductsDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <ProductsDetailContainer idProduct={4}/>
      <ItemListContainer tipoProductos="Celulares en Oferta"/>
    </div>
  );
}
  
export default App;
