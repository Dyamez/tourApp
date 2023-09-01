import React from "react";
import "../style/info.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import eventData from "../assets/data/events";
//import ratings from "../tools/rating";

export default function Info() {
  const { id } = useParams();
  const event = eventData.find((event) => event.id === id);
  const { maxGroupSize, city, distance, price, reviews, title, photo, desc } =
    event;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="eventInside">
                <img src={photo} alt="" />
                <div className="eventInfo">
                  <h3>{title}</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

/*
import React from "react";

export default function Info() {
  return <div>Information</div>;
}
*/
