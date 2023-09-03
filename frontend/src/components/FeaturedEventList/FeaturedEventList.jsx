import React from "react";
import TripList from "../../access/TripList";
//import eventData from "../../assets/data/events";
import { Col } from "reactstrap";
import getDb from "./../../line/getDb";
import { BASE_URL } from "./../../tools/configuration";

const FeaturedEventList = () => {
  const {
    data: featuredEvents,
    loading,
    error,
  } = getDb(`${BASE_URL}/events/search/getFeaturedEvent`);
  console.log(featuredEvents);

  return (
    <>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredEvents?.map((event) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={event.id}>
            <TripList event={event} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedEventList;
