import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
    return (
        <>
            <Navbar bg="dark" expand="lg" className="navbar-dark fixed-top">
                <Container>
                    <Navbar.Brand><Link href="/" passHref legacyBehavior><Nav.Link>Keith Carlos</Nav.Link></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                            <Link href="/about" passHref legacyBehavior><Nav.Link>About Me.</Nav.Link></Link>
                            <Link href="/projects" passHref legacyBehavior><Nav.Link>Projects</Nav.Link></Link>
                            <Link href="/contact-me" passHref legacyBehavior><Nav.Link>Contact Me</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br />
        </>
    )
}