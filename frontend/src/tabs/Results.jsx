import React, { useState } from "react";
import Shared from "./../access/Shared";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TripList from "../access/TripList";

export default function Result() {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <Shared name={"Event Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">Event no result</h4>
            ) : (
              data?.map((event) => (
                <Col lg="9" className="mb-4" key={event.id}>
                  <TripList event={event} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}
/*
import React from "react";

export default function Results() {
  return <div>Hello</div>;
}
*/
