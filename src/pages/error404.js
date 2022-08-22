import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {Link} from "react-router-dom"
import Form from "../components/Form/Form";
import "./css/error404.css"
const Error404 =()=>{
    return (
        <div className="error404">
          <div className="txtError404Container">
            <p className="title">Upss la pagina que buscas no fue encontrada..</p>
            <Link to="/"><p className="subTitle">¿Quieres volver al incio?</p></Link>
            <p className="subTitle">O tal vez te quieras mirar los siguientes productos</p>     
          </div>
          <ItemListContainer Category="Ofertas"/> 
          <div className="formError404">
            <p className="tituloAbout">O si prefieres escribirnos, pronto interemos solucionar el inconveniente!</p>
            <div>
              <Form/>
            </div>           
          </div>    
        </div>
    )
}
export default Error404;