import React from "react";
import { Container, Button, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import brand from "./thrivedxLogo.png";
import "./header.css";

const linky = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/info",
    display: "Information",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center-justify-content-between">
            {}
            <div className="brand">
              <img src={brand} alt="brand" />
            </div>
            {}
            {}
            <div className="directions">
              <ul className="main d-flex align-items-center gap-5">
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
            <div className="dir_right d-flex align-items-center gap-4">
              <div className="dir_btn d-flex align-items-center gap-4">
                <Button className="btn secondBtn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn firstBtn">
                  <Link to="/enlist">Enlist</Link>
                </Button>
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
};

export default Header;
