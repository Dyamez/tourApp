import React from "react";
import { Container, Button, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import brand from "../../assets/images/thrivedxLogo.png";
import "./header.css";

const linky = [
  {
    path: "/home",
    display: "__________Home__|",
  },
  {
    path: "/details",
    display: "¯¯¯Information¯¯¯",
  },
  {
    path: "/tripping",
    display: "|__Tours&Packages_________",
  },
];

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="linky_wrapper d-flex align-items-center justify-content-between">
            {}
            <div className="brand">
              <img src={brand} alt="brand" />
            </div>
            {}
            {}
            <div className="directions d-flex flex-row">
              <ul className="main d-flex justify-content-center gap-3">
                {linky.map((item, index) => (
                  <li className="dir_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "awakeLink" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div className="position-relative">
              <div className="dir_right d-flex align-items-center gap-5">
                <div className="dir_btn d-flex align-items-center gap-3">
                  <Button className="btn btn-warning">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="btn btn-info">
                    <Link to="/enlist">Register</Link>
                  </Button>
                </div>
              </div>
              <span className="portable">
                <i class="ri-menu-5-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
