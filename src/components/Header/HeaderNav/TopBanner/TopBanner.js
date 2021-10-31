import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import "./TopBanner.css"

const TopBanner = () => {
  
    return (
        <div>
            <Card>
                <Card.Img src="https://image.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="top-title"><h1>Welcome To</h1><h1>Our Travel&Tour Website</h1></Card.Title>
                    <Card.Text>
                    <Form.Control className="w-75 mx-auto" size="lg" type="text" placeholder="Search over a million tour and travels..." />
                    <Button className="mt-2" variant="outline-light">Search</Button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default TopBanner;