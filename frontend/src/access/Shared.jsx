import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./shared.css";

export default function Shared({ name }) {
  return (
    <section className="shared_access">
      <Container>
        <Row>
          <Col lg="13">
            <h2>{name}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
