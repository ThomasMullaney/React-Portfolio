import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";


// projects
import BudgetTracker from "../../assets/images/projects/BudgetCapture.PNG";
import EmployeeDirectory from "../../assets/images/projects/EmployeeDirectoryCapture.PNG";
import GoogleBooks from "../../assets/images/projects/GoogleBooksCapture.PNG";
import Notes from "../../assets/images/projects/notesCapture.PNG";
import RandomPassword from "../../assets/images/projects/RandomPasswordCapture.PNG";
import TeamGenerator from "../../assets/images/projects/TeamGeneratorCapture.PNG";
import WorkdayScheduler from "../../assets/images/projects/WorkdayScheduleCapture.PNG";
import WorkoutTracker from "../../assets/images/projects/WorkoutCapture.PNG";

// skills
import L_Heroku from "../../assets/images/skills/heroku.svg";
import L_MongoDB from "../../assets/images/skills/mongoDB.svg";
import L_React from "../../assets/images/skills/react.svg";
import L_NodeJs from "../../assets/images/skills/nodejs.svg";
import L_Express from "../../assets/images/skills/express.svg";
import L_AuthO from "../../assets/images/skills/auth0.svg";
import L_GithubPages from "../../assets/images/skills/github.svg";
import Image from "react-bootstrap/Image";
import L_Javascript from "../../assets/images/skills/javascript.svg";
import L_Html5 from "../../assets/images/skills/html-5.svg";
import L_Css3 from "../../assets/images/skills/css3.svg";
import L_MySql from "../../assets/images/skills/mysql.svg";
import L_Materialize from "../../assets/images/skills/material-ui-1.svg";
import "./timeline.style.css";

const TimeLine = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline>
                <Events>
                    {/* Google Books */}
                    <ImageEvent
                        date="09/2020"
                        className="text-center"
                        src={GoogleBooks}
                        alt="Google Book Search"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A React app that uses a googleAPI to let users search and save books to a personalized reading list.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Graph showing growth and decline of finances, and table listing posted transactions.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src="L_MongoDB"
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_React}
                                                                alt="React"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NodeJs}
                                                                alt="node.js"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Nodejs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Heroku}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Heroku
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://google-books-reading-list-app.herokuapp.com/"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Google-books-app"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                     {/* Employee Directory */}
                     <ImageEvent
                        date="09/2020"
                        className="text-center"
                        src={EmployeeDirectory}
                        alt="EmployeeDirectory"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A project generating random employees within a database.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Users can search by employee name or DOB, results are sortable by clicking on table headers.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_React}
                                                                alt="React"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NodeJs}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Nodejs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://thomasmullaney.github.io/Employee-Directory-v2/"
                                    target="_blank"
                                > See Live
                                    </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Employee-Directory-v2"
                                    target='_blank'
                                > Source Code
                                    </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                
                    {/* Project: Budget Tracker */}
                    <ImageEvent
                        date="08/2020"
                        className="text-center"
                        src={BudgetTracker}
                        alt="Budget Tracker"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                                </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A PWA app that lets you track budgets online or offline.
                                                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Graph showing growth and decline of finances, and table listing posted transactions.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src="L_MongoDB"
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Heroku}
                                                                alt="Heroku"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Heroku
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                alt="Auth0"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MySql}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://offline-pwa-budget-tracker.herokuapp.com/"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Offline-Budget-Tracker"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Workout Tracker */}
                    <ImageEvent
                        date="08/2020"
                        className="text-center"
                        src={WorkoutTracker}
                        alt="Workout Tracker"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A PWA app that lets users post transactions and track budgets.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        A graph lets users see budget changes over time, and a table shows all posted transactions.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Heroku}
                                                                alt="React"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Heroku
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NodeJs}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Nodejs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MySql}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                           MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://exercise-posting-app.herokuapp.com/"
                                    target="_blank"
                                > See Live
                                    </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Fitness-Tracker"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Note Taker */}
                    <ImageEvent
                        date="08/2020"
                        className="text-center"
                        src={Notes}
                        alt="Note Taker"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A simple app that lets users write down notes on a virtual notepad.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Users can add and delete notes.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Heroku}
                                                                alt="React"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Heroku
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NodeJs}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Nodejs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MongoDB}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                           MongoDB
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://note-taking-pad-app.herokuapp.com/"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Express-note-maker"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                
                    {/* employee team generator */}
                    <ImageEvent
                        date="07/2020"
                        className="text-center"
                        src={TeamGenerator}
                        alt="Team Generator"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A project run in the terminal. Users prompted to create employees and add details regarding role and information. Then an HTML page is generated corresponding to the information.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Card headers are colorcoded based on the jobtype of the employee.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Express}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Css3}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NodeJs}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Nodejs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Github}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                           Github
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://drive.google.com/file/d/1f7p8tREe6L0jg3uhd76Qd-3nFaRpJmGU/view"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/team-profile-builder"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                
                    {/* Workday Scheduler */}
                    <ImageEvent
                        date="07/2020"
                        className="text-center"
                        src={WorkdayScheduler}
                        alt="Workday Scheduler"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> An app to help users schedule and plan their day.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        App uses moment.js to display real time to users and to change timeblocks color.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Bootstrap}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Css3}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GithubPages}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                           Github Pages
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://thomasmullaney.github.io/Workday-Planner/"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Workday-Planner"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                
                    {/* Random Password */}
                    <ImageEvent
                        date="07/2020"
                        className="text-center"
                        src={RandomPassword}
                        alt="Random Password Generator"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> An app that lets users generate random passwords.
                                                    <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        App uses inquirer to prompt users about specifications of their password.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Technologies:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Html5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Css3}
                                                                alt="Nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascript}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GithubPages}
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                           Github Pages
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://thomasmullaney.github.io/Javascript-Random-Password-Generator/"
                                    target="_blank"
                                > See Live
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/ThomasMullaney/Javascript-Random-Password-Generator"
                                    target='_blank'
                                > Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default Timeline;