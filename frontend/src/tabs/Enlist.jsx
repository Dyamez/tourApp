import React, { useContext, useState } from "react";
import "../style/login.css";
import { FormGroup, Col, Form, Row, Button, Container } from "reactstrap";
import regImg from "../assets/images/register.webp";
import userIcon from "../assets/images/head.png";
import { useNavigate, Link } from "react-router-dom";
import { AuthDefine } from "../define/AuthDefine";
import { BASE_URL } from "../tools/configuration";

export default function Enlist() {
  /*const nameChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const nameClick = (e) => {
    e.preventDefault();
  }; */
  const [credentials, setCredentials] = useState({
    userName: undefined,
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

    try {
      const res = await fetch(`${BASE_URL}/log/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="loginContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={regImg} alt="" />
              </div>

              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form>
                  <FormGroup onSubmit={nameClick}>
                    <input
                      type="text"
                      placeholder="login name"
                      id="login name"
                      onChange={nameChange}
                    />
                  </FormGroup>
                  <FormGroup onSubmit={nameClick}>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={nameChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={nameChange}
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
