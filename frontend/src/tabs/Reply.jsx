import React, { useState } from "react";
import Shared from "./../access/Shared";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import HotelList from "../access/HotelList";
import BottomLabel from "../access/BottomLabel";

export default function Reply() {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <Shared name={"Hotel Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">hotel no result</h4>
            ) : (
              data?.map((hotel) => (
                <Col lg="9" className="mb-4" key={hotel.id}>
                  <HotelList hotel={hotel} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <BottomLabel />
    </>
  );
}
