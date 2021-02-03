import React from 'react';
import { Carousel } from 'react-bootstrap';
import weddinggraphics from '../Images/WEDDING GRAPHICS.jpg';
import invitation1 from '../Images/invitation1.png';
import invitation2 from '../Images/invitation2.png';
import invitation3 from '../Images/invitation3.png';
import invitation4 from '../Images/invitation4.JPEG';
import invitation5 from '../Images/invitation5.jpg';
import capture7 from '../Images/capture7.jpg';
import mandala from '../Images/mandala.jpg';

function InvitationGraphics() {
    return (
        <div id="invite">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-50  carousel-alter "
                        src={weddinggraphics}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={invitation1}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={invitation2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={invitation3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={invitation4}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={invitation5}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture7}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={mandala}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default InvitationGraphics;