import React from 'react';
import { Carousel } from 'react-bootstrap';
import catalouge1 from '../Images/catalouge1.jpg';
import catalouge2 from '../Images/catalouge2.jpg';
import catalouge3 from '../Images/catalouge3.jpg';
import catalouge4 from '../Images/catalouge4.jpg';
import catalouge5 from '../Images/catalouge5.jpg';
import catalouge6 from '../Images/catalouge6.jpg';
import catalouge7 from '../Images/catalouge7.jpg';
import catalouge8 from '../Images/catalouge8.jpg';
import catalouge9 from '../Images/catalouge9.jpg';
import catalouge10 from '../Images/catalouge10.jpg';

function Catalouge() {
    return (
        <div id="catalouge">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-50  carousel-alter "
                        src={catalouge1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge3}
                        alt="third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge4}
                        alt="fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge5}
                        alt="fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge6}
                        alt="Sixth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge7}
                        alt="Seventh slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge8}
                        alt="Eighth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge9}
                        alt="Ninth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={catalouge10}
                        alt="tenth slide"
                    />
                </Carousel.Item>


            </Carousel>

        </div>
    )
}
export default Catalouge;