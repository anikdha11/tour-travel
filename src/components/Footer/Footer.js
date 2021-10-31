import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="bg-success p-4"> 
            <Container>
                <Row>
                    <Col xs>
                        <h4> Tour & Travels</h4>
                        <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
                    </Col>
                    <Col xs={{ order: 12 }}>
                        <h4>ADDRESS & CONTACT INFO</h4>
                        <p>28800 Dhaka Farmgate Road,Bangladesh Landmark : Next To Airport</p>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <h4>FOLLOW WITH US</h4>
                        <p className="mx-auto d-flex flex-column ">
                            <i className="fab fa-facebook-f mb-2"></i>
                            <i className="fab fa-instagram mb-3 "></i>
                            <i className="fab fa-linkedin-in mb-2"></i>
                            <i className="fab fa-twitter"></i>
                        </p>
                    </Col>
                </Row>
            </Container>        </div>
    );
};

export default Footer;