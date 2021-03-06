import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./message.style.css";
const MyTitleMessage = styled.h1`
    font-family: garamond;
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    margin-top: -125px;
    text-align: center;
    strong {
        font-size: 1.25rem;
    }
    div {
        color: ${(props) => props.theme.textColor};
        text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4)
        font-weight: 100;
        letter-spacing: 7px;
        .main {
            font-size: 50px
        }
        .sub {
            
            font-size: 27px;
            letter-spacing: 2px;
        }
    }
`;

const TitleMessage = () => (
    <MyTitleMessage>
        <div className="titleMessage">
            <div className="heading">
                <div className="main text-center mb-3">
                   <span> Howdy, hi, how you doing! I'm</span>
                    <br />
                    <span>
                        Thomas Mullaney
                    </span>
                </div>
                <Typewriter
                    options={{
                        strings: [
                            "Web Developer",
                            "Full-stack Problem Solver",
                            "Curiosity Powered Coder",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                    }}
                />
            </div>
        </div>
    </MyTitleMessage>
);

export default TitleMessage;