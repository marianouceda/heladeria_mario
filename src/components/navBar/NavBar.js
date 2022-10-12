import CartWidget from './cartWidget/CartWidget'
import './NavBar.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={require('./Mario_1991.jpg')} alt='logo' className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Helados</Nav.Link>
                        <NavDropdown title="Postres" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Bombones</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Almendrado
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Palitos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">
                                Tortas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Otros
                        </Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Búsqueda"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                        <CartWidget />
                    </Form>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;