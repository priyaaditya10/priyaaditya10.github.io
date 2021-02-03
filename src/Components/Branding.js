import React from 'react';
import { Carousel } from 'react-bootstrap';
import capture1 from '../Images/capture1.jpg';
import capture2 from '../Images/capture2.jpg';
import capture3 from '../Images/capture3.jpg';
import branding1 from '../Images/branding1.JPEG';
import branding2 from '../Images/branding2.jpg';
import branding3 from '../Images/branding3.jpg';
import branding5 from '../Images/branding5.JPEG';
import branding6 from '../Images/branding6.png';
import branding7 from '../Images/branding7.png';
import branding8 from '../Images/branding8.png';
import branding9 from '../Images/branding9.png';

function Branding() {
    return (
        <div id="branding">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-50  carousel-alter "
                        src={capture1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture3}
                        alt="third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding1}
                        alt="fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding2}
                        alt="fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding3}
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding5}
                        alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding6}
                        alt="Eighth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding7}
                        alt="Ninth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding8}
                        alt="tenth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={branding9}
                        alt="Eleventh slide"
                    />
                </Carousel.Item>


            </Carousel>

        </div>
    )
}

export default Branding;