import "./Footer.css"
import {Link} from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer =()=>{
    return (
        <div className="footer">
            <Link to="/">
                <div className="logoMarca">
                    <img src="../assets/imagenes/icons/logo.webp" alt="Logo Van Como Piña"/>
                </div>
            </Link>
            <p className="tituloFooter"> Conecta con nostros</p>
            <div className="contenidoFooter">
                <div className="redesFooter">
                    <a href="https://wa.me/5492644647572" target="_blank">
                        <div className="red">
                           <WhatsAppIcon/>
                        </div>
                    </a>
                    <a  href="tel:+542644647572" target="_blank">
                        <div className="red">
                            <LocalPhoneIcon/>
                        </div>
                    </a>
                    <Link to="/aboutUs">
                        <div className="red">
                           <MailOutlineIcon/>
                        </div>
                    </Link>
                </div>
            </div>
        
        </div>
    )
}
export default Footer;