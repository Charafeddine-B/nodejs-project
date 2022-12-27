import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>

      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weblify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#live">Live TV</Nav.Link>

          </Nav>
        </Container>
      </Navbar>


    </>
  );
}

export default Header;