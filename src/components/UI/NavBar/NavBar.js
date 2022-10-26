import CartWidget from './CartWidget/CartWidget'
import {Link} from "react-router-dom";


// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                
                <Navbar.Brand><Link to={"/"}><img src={require('./Mario_1991.jpg')} alt='logo' className='logo'/></Link></Navbar.Brand>
         
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link><Link to={`category/Helados`}>Helados</Link></Nav.Link>
                        
                        
                        <Nav.Link><Link to={`category/Postres`}>Postres</Link></Nav.Link>
                        
                        
                        <Nav.Link><Link to={`category/Otros`}>Otros</Link></Nav.Link>
                        
                        {/* <NavDropdown title="Postres" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Bombones</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Almendrado
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Palitos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">
                                Tortas Heladas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Otros
                        </Nav.Link> */}
                    </Nav>
                    
                    <Form className="d-flex">
                        {/* <Form.Control
                            type="text"
                            placeholder="Búsqueda"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button> */}
                        <CartWidget />
                    </Form>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;