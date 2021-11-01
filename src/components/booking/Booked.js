import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Booked = () => {
    const [booked, setBooked] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [])
    const handleDelete = id =>{
        const url = `http://localhost:5000/booked/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = booked.filter(booking =>booking._id !== id);
                setBooked(remaining);
            }
         
        })
    }
    return (
        <div>
            <h1>Tour Booked</h1>
            {
                booked.map(booking => <div className="m-3" key={booking._id}>
                    <Container>
                        <Card border="success">
                            <Card.Header><h3>{booking.PackageName}</h3></Card.Header>
                            <Card.Body>
                                <Card.Title><small>{booking.email}</small></Card.Title>
                                <Card.Text>
                                    <Button onClick={()=>handleDelete(booking._id)} id="btn-bg" variant="primary">Delete Booked</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>)
            }
        </div>
    );
};

export default Booked;