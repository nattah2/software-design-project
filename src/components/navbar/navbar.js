import { Navbar, Nav, Container } from "react-bootstrap"

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link href="#page1"> Home </Nav.Link>
            <Nav.Link href="#login"> Login </Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  );
}
