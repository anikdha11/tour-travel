import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="App w-75 mx-auto">
            <div id="top-link">
                <h1 className="fw-bold text-warning">Contract Us</h1>
            </div>
            <br />
            <h2 className="text-info">We are here for you.</h2>
            <h6>Please complete the contact information below and let us know your details.</h6>
            <div>
                <Form className="mt-3">
                    <Form.Control placeholder="Name" require />
                    <br />
                    <Form.Control placeholder="Address" require />
                    <br />
                    <Form.Control placeholder="City" require />
                    <br />
                    <Form.Control placeholder="Email" require />
                    <br />
                    <input id="btn-bg" className="mb-4" type="submit" value="Submit" />


                </Form>
            </div>
        </div>
    );
};

export default ContactUs;