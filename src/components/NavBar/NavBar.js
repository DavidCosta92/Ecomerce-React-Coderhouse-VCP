import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import {Link} from "react-router-dom"
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import TemporaryDrawer from './CartWidget2';
import HomeIcon from '@mui/icons-material/Home';
import SwitchColorMode from '../SwitchColorMode/SwitchColorMode'


const Navv=({theme, themeToggler})=>{
    return (
        <div className='containerNav'>
            <Navbar expand="lg">
            <Container>
            <SwitchColorMode theme={theme} themeToggler= {themeToggler} />
            <div className='marcaNavBar'>
                <img src="../assets/imagenes/icons/logo.webp"/>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className='txtNav'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/AboutUs" className='txtNav'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item className='btnLinkNav'><Link to="/Categories/verTodo" className='txtNav'>Ver todo</Link></NavDropdown.Item>
                        <NavDropdown.Item className='btnLinkNav'><Link to="/Categories/Pantalones" className='txtNav'>Pantalones</Link></NavDropdown.Item>
                        <NavDropdown.Item className='btnLinkNav'><Link to="/Categories/Camperas" className='txtNav'>Camperas</Link></NavDropdown.Item>
                        <NavDropdown.Item className='btnLinkNav'><Link to="/Categories/Remeras" className='txtNav'>Remeras</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className='btnLinkNav'>
                        <Link to="/Categories/Ofertas" className='txtNav'> Ofertas</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand className='brandTitle'><Link to="/"><div className='brandContainer'><HomeIcon/><p className='nombreMarca'>Van Como Piña</p>{<TemporaryDrawer/>}</div></Link></Navbar.Brand>
                    <NavBarSearch/> 
                    
                </Nav>
                </Navbar.Collapse>
               

               
            </Container>
            </Navbar>
        </div>
        
      );
}

export default Navv;