import { Navbar, Nav, Container } from 'react-bootstrap'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaCat } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
function NavBar() {
    return (
        <Navbar bg='black' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href="/"><FaCat/>Adopt<span className="text-danger">A</span>Pet<FaDog/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/carrito'><MdOutlineShoppingCart size={'1.5rem'}/></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;