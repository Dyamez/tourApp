import React, { useContext, useRef, useEffect } from "react";
import { Container, Button, Row } from "reactstrap";
import { useNavigate, NavLink, Link } from "react-router-dom";
import brand from "../../assets/images/omega.jpg";
import { AuthDefine } from "../../define/AuthDefine";
import "./header.css";
import travel from "../../assets/images/travel.jpg";

const linky = [
  {
    path: "/home",
    display: "Home", //"__________Home__|",
  },
  {
    path: "/details",
    display: "Information", //"¯¯¯Information¯¯¯",
  },
  {
    path: "/tripping",
    display: "Tour&Packages", //"|__Tours&Packages_________",
  },
  {
    path: "/hotel",
    display: "Hotels_______", //"|__Tours&Packages_________",
  },
];

export default function Header() {
  const dataRf = useRef(null);
  const headerRf = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthDefine);

  const logoff = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const glueFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRf.current.classList.add("glueHeader");
      } else {
        headerRf.current.classList.remove("glueHeader");
      }
    });
  };

  useEffect(() => {
    glueFunction();

    return window.removeEventListener("scroll", glueFunction);
  });
  const toggle = () => dataRf.current.classList.toggle("show");
  return (
    <header className="header" ref={headerRf}>
      <Container>
        <Row>
          <div className="linky_wrapper d-flex align-items-center justify-content-between">
            {}
            <div className="brand">
              <img src={brand} alt="brand" />
              <img src={travel} alt="word" />
            </div>

            <div className="directions" ref={dataRf} onClick={toggle}>
              <ul className="options d-flex align-items-center gap-5">
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

            <div className="dir_right d-flex align-items-end gap-4">
              <div className="dir_btn d-flex align-items-end gap-2">
                {user ? (
                  <>
                    {" "}
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logoff}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn btn-info">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn btn-warning">
                      <Link to="/enlist">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="portable" onClick={toggle}>
                <i class="ri-menu-5-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
