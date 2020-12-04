import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.style.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
            <Jumbotron className="contact-jumbtron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a  
                                href="mailto:tloring.mullaney@gmail.com"
                                target="_blank"
                                rel="noopener no referrer"
                            >
                                <Button variant ="outline-dark" title="tloring.mullaney@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email: tloring.mullaney@gmail.com
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a 
                            href="https://www.linkedin.com/in/thomas-mullaney-809a6bb0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <Button variant="outline-dark" title="My Linkedin">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a 
                                href="https://github.com/ThomasMullaney"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <Button variant="outline-dark" title="My Linkedin">
                                        <i className="fab fa-github-square"></i> GitHub
                                    </Button>
                                </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;