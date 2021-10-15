import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block vh-100 vw-100"
                    src="https://i.ibb.co/R6vk0Nh/banner1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block vh-100 vw-100"
                    src="https://i.ibb.co/pJ4kQSJ/banner3.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block vh-100 vw-100"
                    src="https://i.ibb.co/Tqr0Vrf/master-collects-rebuilt-motor-car-109285-4650.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel> 
        </>
    );
};

export default Banner;