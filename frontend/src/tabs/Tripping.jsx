import React from "react";
import "../style/tripping.css";
import { Row, Col, Container } from "reactstrap";
//import Content from "./../access/Content";
import eventData from "../assets/data/events";
import TripList from "./../access/TripList";
import SearchBox from "./../access/SearchBox";
import Shared from "../access/Shared";

export default function Tripping() {
  /*
  React, { useEffect, useState }
  let [setPage, page] = useState(0);
  let [setPageCount, pageCount] = useState(0);
  useEffect(() => {
    let count = Math.ceil(5 / 8);
    setPageCount(count);
  }, [page]); */
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
      <section className="dest">
        <Container>
          <Row>
            {eventData?.map((event) => (
              <Col mb-5 lg="4" key={event.id}>
                <TripList event={event} />
              </Col>
            ))}{" "}
            {/*
            <Col lg="11">
              <div className="twist d-flex  justify-content-center align-items-center mt-5 gap-4">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    //className={page === number ? "Awake" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
                </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}
