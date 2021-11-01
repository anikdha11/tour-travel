import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./HeaderNav.css";
const HeaderNav = () => {
   const {users,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand id="top-link"className="fw-bolder"  as={Link}  to="/home"><i className="fas fa-tram text-success"></i> Traveling <span>Tour</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                  
                            <Nav.Link id="top-link" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link id="top-link" as={HashLink} to="/home#packages">Packages</Nav.Link>
                            <Nav.Link id="top-link" as={Link} to="/contactus">Contact Us</Nav.Link>
                            <Nav.Link id="top-link"  as={Link} to="/booked">Booked</Nav.Link>
                           {users?.email? <button className="text-danger border me-2 fw-bold" onClick={logOut}>Logout</button>:
                           <Nav.Link id="top-link"  as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className="fw-bold">
                        log in as:<a className="ms-2" href="#login"><span>{users?.displayName}</span><img className="ms-2 rounded-circle" src={users.photoURL} alt="" /></a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;