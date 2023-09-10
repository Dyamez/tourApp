import React, { useEffect, useState } from "react";
import "../style/hotel.css";
import { Row, Col, Container } from "reactstrap";
import hotelData from "../assets/data/hotels";
import HotelList from "./../access/HotelList";
import Shared from "../access/Shared";
import BottomLabel from "../access/BottomLabel";

export default function Hotel() {
  let [pageCount, setPageCount] = useState(0);
  let [page, setPage] = useState(0);
  useEffect(() => {
    let count = Math.ceil(4 / 7);
    setPageCount(count);
  }, [page]);
  return (
    <>
      <Shared name={"Every Hotel Available"} />

      <section className="dest">
        <Container>
          <Row>
            {hotelData?.map((hotel) => (
              <Col mb-5 lg="4" key={hotel.id}>
                <HotelList hotel={hotel} />
              </Col>
            ))}{" "}
            <Col lg="11">
              <div className="twist d-flex  justify-content-center align-items-center mt-5 gap-4">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "Awake" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BottomLabel />
    </>
  );
}
