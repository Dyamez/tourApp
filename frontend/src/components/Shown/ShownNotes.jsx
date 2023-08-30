import React from "react";
import TripList from "../../access/TripList";
import { Col } from "reactstrap";
import eventData from "../../assets/data/events";

export default function ShownNotes() {
  return (
    <>
      {eventData?.map((event) => (
        <Col lg="4" className="mb-4" key={event.id}>
          <TripList event={event} />
        </Col>
      ))}
    </>
  );
}
