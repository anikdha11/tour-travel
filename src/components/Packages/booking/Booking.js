import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const { users } = useAuth()

    const onSubmit = data => {
        console.log(data);
        axios.post('https://sheltered-chamber-16108.herokuapp.com/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submit successfully');
                    reset();
                }
            })
    }
    const { bookingId } = useParams();
    const [single, setSingle] = useState({});

    useEffect(() => {
        fetch(`https://sheltered-chamber-16108.herokuapp.com/packages/${bookingId}`)
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
            <div>
                <h3 className="border rounded w-50 mx-auto p-3 mb-5">Please Confirmed Your Booking</h3>
                <form className="d-flex flex-column mb-2" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 mx-auto mb-4 "{...register("PackageName", { maxLength: 30 })} placeholder="Package name" />
                    <input className="w-50 mx-auto" value={users?.displayName} {...register("name", { maxLength: 20 })} placeholder="name" />
                    <input className="w-50 mx-auto mt-3 mb-3" value={users.email} {...register("email")} placeholder="email" />
                    <input className="w-50 mx-auto mb-4 " {...register("address")} placeholder="address" />
                    <input className="w-50 mx-auto mb-4 " type="number"{...register("Phone number", { min: 50 })} placeholder="Phone number" />
                    <input id="btn-bg" className="w-25 mx-auto" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Booking;