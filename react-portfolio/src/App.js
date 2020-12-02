import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-bootstrap/Container";

// components
import MyNavbar from "./components/navbar/navbar.component";
import MyFooter from "./components/footer/footer.component";
import MyCarousel from "./components/carousel/carousel.component";
import TitleMessage from "./components/title-message/message.component";
import TimeLine from "./components/timeline/timeline.component";
import Slide from "react-reveal/Slide";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Contact from "./pages/contact/contact.component";

import "./App.css";
import FooterPanel from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />
      {/* Particles
          className="particles particles-box"
          params={particlesOptions}
      /> */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
      <Container className="container-box rounded">
                <Fade duration={500}>
                  <hr />
                </Fade>
              </Container>
      </div>
      <Container className="container-box rounded">
                <Slide bottom duration={500}>
                  <hr />
                  <TimeLine />
                </Slide>
      </Container>
      <Container className="container-box rounded">
                <Fade duration={500}>
                  <hr />
                  <ContactForm />
                </Fade>
              </Container>
      
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
