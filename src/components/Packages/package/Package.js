import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Package = ({ service }) => {
    const { name, img,_id } = service;
    return (
        <div>
            <Container>
                <CardGroup className="d-flex">
                    <Card className=" mb-4 bg-info bg-opacity-75">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title> <h4>{name}</h4></Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                          <Link to={`/packages/${_id}`} >  <Button id="btn-bg" variant="primary">Booking</Button></Link>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Package;