import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./HeaderNav.css";
const HeaderNav = () => {
   const {users,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand id="top-link"className="text-warning fw-bolder"  href="#home"><i class="fas fa-tram text-info"></i> Traveling Tour</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                  
                            <Nav.Link id="top-link" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link id="top-link" as={Link} to="/home#packages">Packages</Nav.Link>
                            <Nav.Link id="top-link" as={Link} to="/contactus">Contact Us</Nav.Link>
                           {users?.email? <button className="text-danger border me-2 fw-bold" onClick={logOut}>Logout</button>:
                           <Nav.Link id="top-link"  as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className="fw-bold text-info">
                            Log in as: <a className="ms-2" href="#login">{users?.displayName} <img className="w-25 border rounded-circle ms-2" src={users.photoURL} alt="" /></a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;