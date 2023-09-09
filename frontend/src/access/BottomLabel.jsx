import React from "react";
import "./bottomLabel.css";
import { Container, Row, Col } from "reactstrap";
import clipart from "../assets/images/bottomImg.webp";

export default function BottomLabel() {
  return (
    <section className="bottomlabel">
      <Container>
        <Row>
          <Col lg="6">
            <div className="bottomlabel_content">
              <h2>Become a member and get the latest news</h2>

              <div className="bottomlabel_input">
                <input type="email" placeholder="Email address please!" />
                <button className="btn bottomlabel_btn">Join Us!</button>
              </div>
              <p>
                Join us at Team Omega Ω Travel and Tours, and be up to date with
                the latest and greatest news as well as discounts on our Tours
                and Packages.
              </p>
              <br />
            </div>
          </Col>
          <Col lg="6">
            <div className="bottomlabel_img">
              <img src={clipart} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
