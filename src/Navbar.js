
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
function Navbar1() {
  return (
    <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Estatery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className= "marg" href="#home">Rent</Nav.Link>
            <Nav.Link className= "marg" href="#features">Buy</Nav.Link>
            <Nav.Link className= "marg" href="#pricing">Sell</Nav.Link>
            <Button className='loginButton marg ' variant="outline-dark">Login</Button>
            <Button className='signUpButton marg' variant="outline-dark">SignUP</Button>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Navbar1;