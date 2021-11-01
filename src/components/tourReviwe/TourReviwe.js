import React from 'react';
import { Card } from 'react-bootstrap';
const TourReviwe = () => {
    return (
        <>
            <Card className="m-3 border-0">
                <Card.Body>
                    <Card.Title id="top-link"><h1>Tour Review</h1></Card.Title>
                    <Card.Text className="text-success">
                        <h3>Travelling alone but so well looked after</h3>
                        <p>The perfect combination- lone travelling , excellent organisation and the best of experiences , thank you
                            Thank you for the very kind words, I cannot believe it has been eight holidays that you have had with us.</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="https://i.natgeofe.com/k/de6404e0-95db-44d9-addf-e0e2e4594911/DC-monuments_16x9.jpg?w=1200" />
            </Card>
        </>
    );
};

export default TourReviwe;