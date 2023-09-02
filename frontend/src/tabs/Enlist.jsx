import React, { useState } from "react";
import "../style/login.css";
import { FormGroup, Col, Form, Row, Button, Container } from "reactstrap";
import regImg from "../assets/images/register.webp";
import userIcon from "../assets/images/head.png";
import { Link } from "react-router-dom";

export default function Enlist() {
  const loginDetails = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const regClk = (e) => {
    e.preventDefault();
  };
  const [setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="logiContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={regImg} alt="" />
              </div>

              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form>
                  <FormGroup onSubmit={regClk}>
                    <input
                      type="text"
                      placeholder="login name"
                      id="login name"
                      onChange={loginDetails}
                    />
                  </FormGroup>
                  <FormGroup onSubmit={regClk}>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={loginDetails}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={loginDetails}
                    />
                  </FormGroup>
                  <Button className="btn btn-info secBtn" type="submit">
                    Register
                  </Button>
                </Form>
                <p>
                  Are you already part of the Omega Family?{" "}
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
