import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./hotelList.css";
import ratings from "../tools/rating";

export default function HotelList({ hotel }) {
  const { title, price, id, city, photo, reviews, featured } = hotel;
  const { Satisfaction, rating } = ratings(reviews);

  /*
  const Satisfaction = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const rating =
    Satisfaction === 0
      ? ""
      : Satisfaction === 1
      ? Satisfaction
      : Satisfaction / reviews?.length;

      */
  return (
    <div className="hotel_list">
      <Card>
        <div className="hotel_img">
          <img src={photo} alt="hotelImage" />
          {featured && <span>Recommended</span>}
        </div>

        <CardBody>
          <div className="list_up d-flex align-items-center justify-content-between">
            <span className="hotel_location align-items-center gap-1">
              <i class="ri-map-pin-range-line"></i> {city}
            </span>
            <span className="hotel_rating align-items-center gap-1">
              <i className="ri-star-s-line"></i> {rating === 0 ? null : rating}
              {Satisfaction === 0 ? (
                "None to see here yet"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h4 className="hotel_title">
            <Link to={`/tripping/${id}`}>{title}</Link>
          </h4>
          <div className="list_bottom d-flex align-items-center justify-content-between mt-3">
            <h4>
              ${price} <span> /each individual</span>
            </h4>
            <button className="reserve_btn">
              <Link to={`/tripping/${id}`}>Reserve your Tour</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
