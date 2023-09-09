import React from "react";
import "./linkys.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import brand from "../../assets/images/omega.jpg";

const linky_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/details",
    display: "Information",
  },
  {
    path: "/tripping",
    display: "Tours&Information",
  },
];

const linky_links2 = [
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/enlist",
    display: "Register",
  },
];

export default function Linkys() {
  const year = new Date().getFullYear();

  return (
    <linkys className="linkys">
      <Container>
        <Row>
          <Col lg="3">
            <div className="brand">
              <img src={brand} alt="" />
              <p>
                For Milestone Project II: {year}
                <br />
                Edward James Manansala & <br />
                Samantha Sta.Ana
              </p>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="linky_link-title">Be Amazed</h5>

            <ListGroup className="linky_quick-links">
              {linky_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="linky_link-title">Links</h5>

            <ListGroup className="linky_quick-links">
              {linky_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="linky_link-title">Details</h5>

            <ListGroup className="linky_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-home-5-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">UNLV@ThriveDX, Las Vegas</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">teamOmega@legitEmail.biz</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-customer-service-2-line"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+1-702-OMEGAS</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </linkys>
  );
}
