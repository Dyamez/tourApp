import React from "react";
import TripList from "../../access/TripList";
import { Col } from "reactstrap";
import useFetch from "./../../line/getDb";
//import { BASE_URL } from "./../../tools/configuration";
//import HotelList from "../../access/HotelList";

export default function FeaturedEventList() {
  const {
    data: featuredEvents,
    loading,
    error,
  } = useFetch(
    `https://backend-fun.onrender.com/api/v1/tours/search/getFeaturedTour`
  );

  return (
    <>
      {loading && <h4>Remote mongoDB fetching...</h4>}
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
