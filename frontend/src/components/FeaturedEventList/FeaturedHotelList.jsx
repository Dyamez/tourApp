import React from "react";
//import TripList from "../../access/TripList";
import { Col } from "reactstrap";
import useFetch from "./../../line/getDb";
//import { BASE_URL } from "./../../tools/configuration";
import HotelList from "../../access/HotelList";

export default function FeaturedHotelList() {
  const {
    data: hotels,
    loading,
    error,
  } = useFetch(`../../assets/data/events_book.hotels.json`);
  //(`${BASE_URL}/hotels`);

  return (
    <>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        hotels?.map((hotel) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={hotel._id}>
            <HotelList hotel={hotel} />
          </Col>
        ))}
    </>
  );
}
