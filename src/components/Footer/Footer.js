import "./Footer.css"
import {Link} from "react-router-dom"

const Footer =()=>{
    return (
        <div className="footer">
            <Link to="/">
                <div className="logoMarca">
                    <img src="../assets/imagenes/icons/logo.webp"/>
                </div>
            </Link>
            <p className="tituloFooter"> Conecta con nostros</p>
            <div className="contenidoFooter">
                <div className="redesFooter">
                    <a href="https://wa.me/5492644647572" target="_blank">
                        <div className="red">
                            <img src="../assets/imagenes/icons/logoWs.png"/>
                        </div>
                    </a>
                    <a  href="tel:+542644647572" target="_blank">
                        <div className="red">
                            <img src="../assets/imagenes/icons/logoTel.png"/>
                        </div>
                    </a>
                    <Link to="/aboutUs">
                        <div className="red">
                            <img src="../assets/imagenes/icons/logoMail.png"/>
                        </div>
                    </Link>
                </div>
            </div>
        
        </div>
    )
}
export default Footer;