import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/images/profile/profilePicture.png";
import Button from "react-bootstrap/Button";

import "./about.style.css";

function About() {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me </h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image
                                className="profile justify-content-end"
                                alt="profile"
                                src={Profile}
                                thumbnail fluid
                                />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 my-details rounded">
                            Greetings, I'm <strong>&nbsp;Tom Mullaney!</strong>
                            <br />
                            A Fullstack coder proficent in front-end and back-end web development
                            <br />
                            <br />
                            Also, I have a degree in Marketing, and experience with business operations, logistics, and customer service.
                            <br />
                            <br />
                            I love coding because with its struggles comes great feelings of accomplishment. The versitility of Web development excites me because it combines the skilled engineering of a mechanic with the creativity of a marketer. In a way, web development continues the practice of print advertising but injected with the technology to allow the user do more than just read, while letting the advertisment read the user as well. 
                            <br />
                            <br />
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Give me a ring!
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/thomas-mullaney-809a6bb0/"
                                        target="_blank"
                                        >
                                            <Button className="m-2" bariant="outline-success">
                                                My Linkedin
                                            </Button>
                                        </a>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/ThomasMullaney"
                                        target="_blank"
                                        >
                                            <Button className="m-2" bariant="outline-success">
                                               My Github
                                            </Button>
                                        </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}

export default About;