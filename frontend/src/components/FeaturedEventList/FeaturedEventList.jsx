import React from "react";
import TripList from "../../access/TripList";
import { Col } from "reactstrap";
import getDb from "./../../line/getDb";
import { BASE_URL } from "./../../tools/configuration";

export default function FeaturedEventList() {
  const {
    data: featuredEvents,
    loading,
    error,
  } = getDb(`${BASE_URL}/events/search/getFeaturedEvent`);

  return (
    <>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredEvents?.map((event) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={event._id}>
            <TripList event={event} />
          </Col>
        ))}
    </>
  );
}
