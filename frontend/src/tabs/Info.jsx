/*
import React, { useState, useRef, useEffect, useContext } from "react";
import "../style/info.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import eventData from "../assets/data/events.json";
import calculateAvgRating from "../tools/rating";
import Book from "../components/Book/book";
import getDb from "../line/getDb";
import { BASE_URL } from "../tools/configuration";
import { AuthDefine } from "../define/AuthDefine";
import head from "../assets/images/head.png";

export default function Info() {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [eventRating, setEventRating] = useState(null);
  const { user } = useContext(AuthDefine);

  //const event = eventData.find((event) => event.id === id);
  const { data: event, loading, error } = getDb(`${BASE_URL}/events/${id}`);
  //`${eventData}/events/${id}`;
  const {
    maxGroupSize,
    city,
    distance,
    price,
    reviews,
    title,
    photo,
    desc,
    address,
  } = event;
  const { satisfaction, ratings } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Log In");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: eventRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        //`https://backend-fun.onrender.com/api/v1/tours/review${id}`,

        //(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">LOADING.........</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <Row>
            <Col lg="8">
              <div className="eventInside">
                <img src={photo} alt="" />
                <div className="eventInfo">
                  <h3>{title}</h3>
                  <div className="d-flex gap-5 align-items-center">
                    <span className="event_rating align-items-center gap-1">
                      <i
                        className="ri-star-s-line"
                        style={{ color: "gold" }}
                      ></i>
                      {calculateAvgRating === 0 ? null : calculateAvgRating}
                      {calculateAvgRating === 0 ? (
                        "No star"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-star-line"></i> {address}
                    </span>
                  </div>
                  <div className="event_extra-details">
                    <span>
                      <i class="ri-map-pin-5-line"></i> {city}
                    </span>
                    <span>
                      <i class="ri-price-tag-3-line"></i> ${price}
                    </span>
                    <span>
                      <i class="ri-send-plane-line"></i> {distance} miles
                    </span>
                    <span>
                      <i class="ri-group-fill"></i> {maxGroupSize} person
                    </span>
                  </div>
                  <h5>Information</h5>
                  <p>{desc}</p>
                </div>
                <div className="perRev mt-4">
                  <h4>Feedback ({reviews?.length} reviewed)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setEventRating(1)}>
                        1 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(2)}>
                        2 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(3)}>
                        3 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(4)}>
                        4 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(5)}>
                        5 <i class="ri-star-line"></i>
                      </span>
                    </div>
                    <div className="review_input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Tell us how you really feel"
                        required
                      />
                      <button
                        className="btn btn-warning text-white"
                        type="submit"
                      >
                        Pass
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={head} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Book event={event} ratings={ratings} />
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}
*/

import React, { useState, useRef, useEffect, useContext } from "react";
import "../style/info.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import eventData from "../assets/data/events";
import ratings from "../tools/rating";
import Book from "../components/Book/book";
import calculateAvgRating from "../tools/rating";
import head from "../assets/images/head.png";
import { AuthDefine } from "../define/AuthDefine";
import { BASE_URL } from "../tools/configuration";

export default function Info() {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const event = eventData.find((event) => event.id === id);
  const [eventRating, setEventRating] = useState(null);
  const { user } = useContext(AuthDefine);
  const {
    maxGroupSize,
    city,
    distance,
    price,
    reviews,
    title,
    photo,
    desc,
    address,
  } = event;
  const { Satisfaction, rating } = ratings(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === true) {
        //(!user || user === undefined || user === null)
        //alert("Log In");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: eventRating,
      };

      const res = await fetch(`${BASE_URL}/api/v1/review/${id}`, {
        //`https://backend-fun.onrender.com/api/v1/tours/review${id}`,

        //(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="eventInside">
                <img src={photo} alt="" />
                <div className="eventInfo">
                  <h3>{title}</h3>
                  <div className="d-flex gap-5 align-items-center">
                    <span className="event_rating align-items-center gap-1">
                      <i
                        className="ri-star-s-line"
                        style={{ color: "gold" }}
                      ></i>
                      {calculateAvgRating === 0 ? null : calculateAvgRating}
                      {calculateAvgRating === 0 ? (
                        "No star"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-star-line"></i> {address}
                    </span>
                  </div>
                  <div className="event_extra-details">
                    <span>
                      <i class="ri-map-pin-5-line"></i> {city}
                    </span>
                    <span>
                      <i class="ri-price-tag-3-line"></i> ${price}
                    </span>
                    <span>
                      <i class="ri-send-plane-line"></i> {distance} miles
                    </span>
                    <span>
                      <i class="ri-group-fill"></i> {maxGroupSize} person
                    </span>
                  </div>
                  <h5>Information</h5>
                  <p>{desc}</p>
                </div>
                <div className="perRev mt-4">
                  <h4>Feedback ({reviews?.length} reviewed)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setEventRating(1)}>
                        1 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(2)}>
                        2 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(3)}>
                        3 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(4)}>
                        4 <i class="ri-star-line"></i>
                      </span>
                      <span onClick={() => setEventRating(5)}>
                        5 <i class="ri-star-line"></i>
                      </span>
                    </div>
                    <div className="review_input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Tell us how you really feel"
                        required
                      />
                      <button
                        className="btn btn-warning text-white"
                        type="submit"
                      >
                        Pass
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={head} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Book event={event} ratings={ratings} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
