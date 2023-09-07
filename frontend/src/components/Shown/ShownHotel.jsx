import React from "react";
import HotelList from "../../access/HotelList";
import { Col } from "reactstrap";
import hotelData from "../../assets/data/hotels.js";

export default function ShownNotes() {
  return (
    <>
      {hotelData?.map((hotel) => (
        <Col lg="4" className="mb-4" key={hotel.id}>
          <HotelList hotel={hotel} />
        </Col>
      ))}
    </>
  );
}
