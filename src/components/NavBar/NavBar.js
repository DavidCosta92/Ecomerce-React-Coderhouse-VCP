import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import CartWidget from './CartWidget';

const Navv=()=>{
    return (
        <div className='containerNav'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Ofertas
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home" className='brandTitle'> Dr TECNO</Navbar.Brand>
               <CartWidget/>
            </Container>
            </Navbar>
        </div>
        
      );
}

export default Navv;