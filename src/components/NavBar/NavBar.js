import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import {Link} from "react-router-dom"
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import TemporaryDrawer from './CartWidget2';
import HomeIcon from '@mui/icons-material/Home';

const Navv=()=>{
    return (
        <div className='containerNav'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className='txtNav'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/AboutUs" className='txtNav'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/Categories/verTodo" className='txtNav'>Ver todo</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/Categories/Pantalones" className='txtNav'>Pantalones</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/Categories/Camperas" className='txtNav'>Camperas</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/Categories/Remeras" className='txtNav'>Remeras</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/Categories/Ofertas" className='txtNav'> Ofertas</Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <NavBarSearch/>
                <Navbar.Brand className='brandTitle'><Link to="/"><div className='brandContainer'><HomeIcon/><p className='nombreMarca'>Van Como Piña</p></div></Link></Navbar.Brand>
               <TemporaryDrawer/>
            </Container>
            </Navbar>
        </div>
        
      );
}

export default Navv;