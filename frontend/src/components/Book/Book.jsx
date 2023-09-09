/*
import React from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import "./book.css";

export default function Book({event}) {
  return <div>Booked!</div>;
} */

import React, { useState, useContext } from "react";
import "./book.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { AuthDefine } from "../../define/AuthDefine";
import { BASE_URL } from "../../tools/configuration";

export default function Book({ event, ratings }) {
  const { price, reviews, title } = event;
  const direction = useNavigate();

  const { user } = useContext(AuthDefine);

  const [book, setBook] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const loginDetails = (e) => {
    setBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 68;
  const totalAmount =
    Number(price) * Number(book.guestSize) + Number(serviceFee);

  const regClk = async (e) => {
    e.preventDefault();
    console.log(book);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(book),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      direction("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="book">
      <div className="book_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="eventRating d-flex align-items-center">
          <i class="ri-star-fill" style={{ color: "gold" }}></i>
          {ratings === 0 ? null : ratings} ({reviews?.length})
        </span>
      </div>

      <div className="book_form">
        <h5>Details Form</h5>
        <Form className="book_info-form" onSubmit={regClk}>
          <FormGroup>
            <input
              type="text"
              placeholder="Your Name"
              id="fullName"
              required
              onChange={loginDetails}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="tel"
              placeholder="Telephone number"
              id="phone"
              required
              onChange={loginDetails}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={loginDetails}
            />
            <input
              type="number"
              placeholder="Number of person"
              id="guestSize"
              required
              onChange={loginDetails}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="book_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i> per Guest
            </h5>
            <span> ${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Omega's Booking Fee</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total Amount:</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={regClk}>
          Reserve Now!!!
        </Button>
      </div>
    </div>
  );
}
