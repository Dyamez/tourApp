import React from "react";
import TripList from "../../access/TripList";
import { Col } from "reactstrap";
import eventData from "../../assets/data/events";

export default function ShownNotes() {
  return (
    <>
      {eventData?.map((events) => (
        <Col lg="4" className="mb-4" key={events.id}>
          <TripList events={events} />
        </Col>
      ))}
    </>
  );
}
