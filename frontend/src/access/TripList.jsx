import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function TripList({ event }) {
  const { title, price, id, city, avgRating, photo, reviews } = event; //featured,

  return (
    <div className="trip_list">
      <Card>
        <div className="trip_img">
          <img src={photo} alt="tripImage" />
          <span>Recommended</span>
        </div>
      </Card>
      <CardBody>
        <div className="list_up d-flex align-items-center justify-content-between">
          <span className="event_location align-items-center gap-1">
            <i class="ri-map-pin-range-line"></i> {city}
          </span>
          <span className="event_rating align-items-center gap-1">
            <i className="ri-star-s-line"></i> {avgRating}{" "}
            <span>({reviews.length})</span>
          </span>
        </div>
        <h4 className="event_title">
          <Link to={`/events/${id}`}>{title}</Link>
        </h4>
        <div className="list_bottom d-flex align-items-center justify-content-between mt-3"></div>
        <h4>
          ${price} <span> /each individual</span>
        </h4>
        <button className="btn reserve_btn">
          <Link to={`/events/${id}`}>Reserve your Tour</Link>
        </button>
      </CardBody>
    </div>
  );
}
