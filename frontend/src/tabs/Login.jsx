import React, { useState, useContext } from "react";
import "../style/login.css";
import { FormGroup, Col, Form, Row, Button, Container } from "reactstrap";
import loginImg from "../assets/images/logging.png";
import userIcon from "../assets/images/head.png";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../tools/configuration";
import { AuthDefine } from "../define/AuthDefine";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthDefine);
  const navigate = useNavigate();

  const nameChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const nameClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/log/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="loginContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={loginImg} alt="icon login" />
              </div>

              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={nameClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={nameChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={nameChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/enlist">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/*
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
*/
