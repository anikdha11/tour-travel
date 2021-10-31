import React from 'react';
import { Card, CardGroup, Container} from 'react-bootstrap';
const Package = ({ service }) => {
    const { name,img } = service;
    return (
        <div>
        <Container>
            <CardGroup className="d-flex">
                <Card className=" mb-4 bg-info bg-opacity-75">
                    <Card.Img  variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> <h4>{name}</h4></Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
            </Container>
        </div>
    );
};

export default Package;