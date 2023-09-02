import React from "react";
import "../style/info.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import eventData from "../assets/data/events";
import ratings from "../tools/rating";

export default function Info() {
  const { id } = useParams();
  const event = eventData.find((event) => event.id === id);
  const { maxGroupSize, city, distance, price, reviews, title, photo, desc } =
    event;
  const { Satisfaction, rating } = ratings(reviews);

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
                  <div className="d-flex gap-5 align-items-center">
                    <span className="event_rating align-items-center gap-1">
                      <i
                        className="ri-star-s-line"
                        style={{ color: "gold" }}
                      ></i>{" "}
                      {ratings === 0 ? null : rating}
                      {Satisfaction === 0 ? (
                        "None to see here yet"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-5-line"></i> {city}
                    </span>
                    <span>
                      <i class="ri-price-tag-3-line"></i> ${price}
                    </span>
                    <span>
                      <i class="ri-send-plane-line"></i> {distance} miles
                    </span>
                    <span>
                      <i class="ri-group-fill"></i> {maxGroupSize} person
                    </span>
                  </div>
                  <h5>Information</h5>
                  <p>{desc}</p>
                </div>
                <div className="perRev mt-4">
                  <h4>Feedback ({reviews?.length} reviewed)</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
