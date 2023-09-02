import React, { useState } from "react";
import "../style/login.css";
import { FormGroup, Col, Form, Row, Button, Container } from "reactstrap";
import loginImg from "../assets/images/logging.png";
import userIcon from "../assets/images/head.png";
import { Link } from "react-router-dom";

export default function Login() {
  const loginDetails = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const regClk = (e) => {
    e.preventDefault();
  };
  const [setCredentials] = useState({
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
                <img src={loginImg} alt="" />
              </div>

              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form>
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
                    Login
                  </Button>
                </Form>
                <p>
                  Be a part of our family! <Link to="/enlist">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
