import React, { useEffect, useState } from 'react';
import { Card,Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookingId } = useParams();
    const [single, setSingle] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${bookingId}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    return (
        <div>

            <Container>
                <Card.Img className=" w-50 mx-auto mt-4" variant="top" src={single.img} />
                <Card.Body>
                    <Card.Title id="top-link"><h2>{single.name}</h2></Card.Title>
                </Card.Body>
            </Container>
        </div>
    );
};

export default Booking;