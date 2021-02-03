import React from 'react';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';


function Services() {
    return (
        <div className="services-div" >

            <CardDeck>

                <Card className="services-alter">
                    <Card.Body>
                        <Card.Title className="card-title-alter">Vector and Digital Art</Card.Title>
                        < Card.Link href="#vector" 
                            className="link-alter" > Learn More </Card.Link>

                    </Card.Body>
                </Card>

                    <Card className="services-alter">
                        <Card.Body>
                            <Card.Title className="card-title-alter">Logo Reveal and Infographic Videos</Card.Title>

                            <Card.Link href="#video" className="link-alter" >Learn More</Card.Link>

                        </Card.Body>
                    </Card>


                    <Card className="services-alter" >
                        <Card.Body>
                            <Card.Title className="card-title-alter">Branding and Printing Services</Card.Title>
                            <Card.Link href="#branding" className="link-alter">Learn More</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className="services-alter">
                        <Card.Body>
                            <Card.Title className="card-title-alter">Social Media Post and Designing</Card.Title>
                            <Card.Link href="#post" className="link-alter">Learn More</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className="services-alter">
                        <Card.Body>
                            <Card.Title className="card-title-alter">Invitation Graphics and E-Card</Card.Title>
                            <Card.Link href="#invite" className="link-alter">Learn More</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className="services-alter">
                        <Card.Body>
                            <Card.Title className="card-title-alter">Catalouge Designing</Card.Title>
                            <Card.Link href="#catalouge" className="link-alter">Learn More</Card.Link>

                        </Card.Body>
                    </Card>




            </CardDeck>
                <br /><br /><br /><br /><br />
        </div>

    )

}


export default Services;