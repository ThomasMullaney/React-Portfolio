import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";

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
                                <Button variant ="outline-dark" title="Other projects">
                                        <i className="fav fa-github-square"></i> Github
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