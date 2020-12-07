import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/images/carousel/slide1.webp";
import Slide2 from "../../assets/images/carousel/slide2.webp";
import Slide3 from "../../assets/images/carousel/slide3.webp";
import ScrollDown from "../scroll/scroll.component";
import "./carousel.style.css";

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel
                controls={false}
                indicators
                interval={3000}
                pauseOnHover={false}
            >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide1}
                            alt="First Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide2}
                            alt="Second Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide3}
                            alt="Third Slide"
                        />
                    </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
    );
};

export default MyCarousel;