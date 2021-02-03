import React from 'react';
import { Carousel } from 'react-bootstrap';

function Video() {
    return (

        <div id="video">
            <Carousel>
                <Carousel.Item>
                    <div className="container">
                        < iframe
                            className="responsive-iframe"
                            width="70%"
                            height="50%"
                            src="https://www.youtube.com/embed/cbPx36NsRyM"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen > </iframe>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="container">
                        <iframe
                            className="responsive-iframe"
                            width="560"
                            height="560"
                            src="https://www.youtube-nocookie.com/embed/OXH2z_2Wv_M"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="container">
                        <iframe
                            className="responsive-iframe"
                            width="560"
                            height="560"
                            src="https://www.youtube-nocookie.com/embed/YXRGXrgT9nw"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )


}
export default Video;