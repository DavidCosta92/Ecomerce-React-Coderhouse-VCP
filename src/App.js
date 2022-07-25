import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer tipoProductos="Celulares en Oferta"/>

    </div>
  );
}
  
export default App;
