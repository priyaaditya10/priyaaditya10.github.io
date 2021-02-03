import React from 'react';
import { Carousel } from 'react-bootstrap';
import post1 from '../Images/post1.jpg';
import post2 from '../Images/post2.jpg';
import post3 from '../Images/post3.JPEG';
import post4 from '../Images/post4.jpg';
import post5 from '../Images/post5.jpg';
import post6 from '../Images/post6.jpg';
import post7 from '../Images/post7.jpg';
import post8 from '../Images/post8.jpg';

function Post() {
    return (
        <div id="post">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-50  carousel-alter "
                        src={post1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post6}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post7}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post8}
                        alt="Sixth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post3}
                        alt="Seventh slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-50 carousel-alter"
                        src={post4}
                        alt="Eighth slide"
                    />
                </Carousel.Item>



            </Carousel>

        </div>
    )
}
export default Post;