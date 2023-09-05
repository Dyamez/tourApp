import React from "react";
import "../style/home.css";
import { Row, Container, Col } from "reactstrap";
import taalImg from "../assets/images/taal.webp";
import glidingVid from "../assets/images/glidiing.mp4";
import UnderText from "../access/underText";
import ShownNotes from "../components/Shown/ShownNotes";
import globalImg from "../assets/images/worldMap.jpg";
import SearchBox from "../access/SearchBox";
import MenuNote from "../menu/MenuNote";

//import vacation from "../assets/images/vacation.jpg";

export default function Home() {
  return (
    <>
      {}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="underText_menu">
                <div className="my_underText d-flex align-items-center">
                  <UnderText underText={"Ω Team Omega Travel and Tours"} />

                  <img src={globalImg} alt="globe" />
                </div>
                <h1>
                  You only live once, make it count...{" "}
                  <span className="spotlight"> It's yours for the taking.</span>
                </h1>
                <p>
                  Make the most out of Life. Travel the world and enjoy more of
                  what the world has to offer. Create memories that would last a
                  lifetime, meeting people from different cultures and races.
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className="texted_imgBox gap-5">
                <img src={taalImg} alt="taal volcano" />
              </div>
              <Col lg="20">
                <div className="texted_imgBox video">
                  <video src={glidingVid} alt="gliding video" controls />
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <SearchBox />
            </Col>
          </Row>
        </Container>
      </section>
      {}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h4 className="offerings_text">Our Services:</h4>
              <h3 className="head_text">
                Only the Best are what we offer... Guaranteed!
              </h3>
            </Col>
            <MenuNote />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="11" classname="mb-6">
              <UnderText
                className="UnderText"
                underText={"Team Omega Ω Tours & Travel"}
              />
              <h3 className="shownTitle">See what we have to offer!</h3>
            </Col>
            <ShownNotes />
          </Row>
        </Container>
      </section>
    </>
  );
}
