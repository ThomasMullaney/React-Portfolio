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
            <h1 className="pt-3 text-center title pb-3">About Me </h1>
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
                            A 2020 Rutgers full stack coding bootcamp graduate proficient in front-end and back-end web development.
                            <br />
                            <br />
                            I have a degree in Marketing, and experience with business operations, logistics, and customer service.
                            <br />
                            <br />
                            I love coding because of its applicable versatility. Coding takes a bit of logic, creativity, passion and a whole lot of persistence. With its difficulties and frustrations comes wonderful feelings of accomplishmen
                            <br />
                            <br />
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-success">
                                            Give me a ring!
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/thomas-mullaney-809a6bb0/"
                                        target="_blank"
                                        >
                                            <Button className="m-2" variant="outline-success">
                                                My Linkedin
                                            </Button>
                                        </a>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/ThomasMullaney"
                                        target="_blank"
                                        >
                                            <Button className="m-2" variant="outline-success">
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