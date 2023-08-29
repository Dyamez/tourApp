import React from "react";
import "../style/home.css";
import { Row, Container, Col } from "reactstrap";
import bridgeImg from "../assets/images/bridge.jpg";
import rrockImg from "../assets/images/rrock.jpg";
import vegasVid from "../assets/images/vegasVid.webm";
import UnderText from "../access/underText";
import globalImg from "../assets/images/worldMap.jpg";
import SearchBox from "../access/SearchBox";

const Home = () => {
  return (
    <>
      {}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="underText_menu">
                <div className="my_underText d-flex align-items-center">
                  <UnderText underText={"Destinations Await You!"} />
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
              <div className="texted_imgBox">
                <img src={bridgeImg} alt="bridge Frisco" />
              </div>
              <Col lg="20">
                <div className="texted_imgBox video">
                  <video src={vegasVid} alt="vegas video" controls />
                </div>
                <Col lg="15">
                  <div className="texted_imgBox">
                    <img src={rrockImg} alt="red rock NV" />
                  </div>
                </Col>
                <SearchBox />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      {}
    </>
  );
};

export default Home;
