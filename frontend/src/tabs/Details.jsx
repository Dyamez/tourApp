import React from "react";
//import ShownNotes from "../components/Shown/ShownNotes";
import { Row, Container, Col } from "reactstrap";
import UnderText from "../access/underText";
import FeaturedEventList from "../components/FeaturedEventList/FeaturedEventList";
import travel3 from "../assets/images/travel3.jpg";
import ShownHotel from "../components/Shown/ShownHotel";
import brand from "../assets/images/thrivedxLogo.png";
import "../style/details.css";
import BottomLabel from "../access/BottomLabel";

export default function Details() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="7">
              <div className="funTimes">
                <UnderText underText={"From Dreams to Reality"} />

                <h3>
                  For the time of your life <br />
                  ΩTeam Omega at your service
                </h3>
                <p>
                  We at ΩTeam Omega Travel & Tours, strive to give you the very
                  best.
                  <br />
                  It is our mission to make those dreams into reality.
                </p>
              </div>
              <div className="opposite d-flex align-items-center gap-4">
                <div className="oppositeBx">
                  <span>
                    <h5>More than 1k</h5>
                  </span>
                  <h5>Satisfied clientele</h5>
                </div>
                <div className="oppositeBx">
                  <span>
                    <h5>More than 1k</h5>
                  </span>
                  <h5>Worry free tours</h5>
                </div>
                <div className="oppositeBx">
                  <span>
                    <h5>18 years of Expertise</h5>
                  </span>
                  <h5>Established 2005</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <div className="scene">
              <img src={travel3} alt="scenery" />
            </div>
            <br />
            <div className="brand">
              <img src={brand} alt="brand" />
            </div>
            <Col lg="11" classname="mb-6">
              <UnderText
                className="UnderText"
                underText={"Discover Team Omega Ω"}
              />
              <h3 className="shownTitle">Recommended Tour Experience</h3>
            </Col>
            {/*backend MongoDB list*/}
            <FeaturedEventList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="11" classname="mb-6">
              <UnderText
                className="UnderText"
                underText={"Hotel Accomodations Available"}
              />
              <h3 className="shownTitle">
                Premier Hotels for all destinations
              </h3>
            </Col>
            <ShownHotel />
          </Row>
        </Container>
      </section>
      <BottomLabel />
    </>
  );
}
