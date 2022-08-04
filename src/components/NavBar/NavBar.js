import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"

const Navv=()=>{
    return (
        <div className='containerNav'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className='txtNav'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/aboutUs" className='txtNav'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/categories/verTodo" className='txtNav'>Ver todo</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/categories/Pantalones" className='txtNav'>Pantalones</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/categories/Camperas" className='txtNav'>Camperas</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/categories/Remeras" className='txtNav'>Remeras</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/categories/Ofertas" className='txtNav'> Ofertas</Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='brandTitle'><Link to="/" className='nombreMarca'> Van Como Piña</Link></Navbar.Brand>
               <CartWidget/>
            </Container>
            </Navbar>
        </div>
        
      );
}

export default Navv;