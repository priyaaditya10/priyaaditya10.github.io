import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import raster1 from '../Images/raster1.jpg';
import raster2 from '../Images/raster2.png';
import raster3 from '../Images/raster3.png';
import capture4 from '../Images/capture4.jpg';
import capture5 from '../Images/capture5.jpg';
import capture6 from '../Images/capture6.jpg';
import digital1 from '../Images/digital1.JPEG';
import digital2 from '../Images/digital2.jpg';

function Raster() {

    return (
        <div id="vector">
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-50  carousel-alter "
                        src={raster1}
                        alt="First slide"
                    />
                </Carousel.Item>

                < Carousel.Item >
                    <img
                        className="d-block w-50 carousel-alter"
                        src={raster2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={raster3}
                        alt="third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={digital1}
                        alt="fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture4}
                        alt="fifth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture5}
                        alt="sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={capture6}
                        alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={digital2}
                        alt="eighth slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>

    )
}
export default Raster;
