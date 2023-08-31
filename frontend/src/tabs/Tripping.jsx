import React from "react";
import "../style/tripping.css";
import { Row, Container } from "reactstrap";
//import Content from "./../access/Content";
import eventData from "../assets/data/events";
import TripList from "./../access/TripList";
import SearchBox from "./../access/SearchBox";
import Shared from "../access/Shared";

export default function Tripping() {
  return (
    <>
      <Shared name={"Every Trip Available"} />
      <section>
        <Container>
          <Row>
            <SearchBox />
          </Row>
        </Container>
      </section>
    </>
  );
}
