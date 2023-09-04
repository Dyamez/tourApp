import React, { useRef } from "react";
import "./searchBox.css";
import { Form, FormGroup, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../tools/configuration";

export default function SearchBox() {
  const placesRf = useRef("");
  const lengthRf = useRef(0);
  const capacityRf = useRef(0);
  const navigate = useNavigate();

  const searchMee = async () => {
    const city = placesRf.current.value;
    const distance = lengthRf.current.value;
    const maxGroupSize = capacityRf.current.value;
    if (city === "" || distance === "" || maxGroupSize === "") {
      return alert("All Boxes must be Filled");
    }

    const res = await fetch(
      `${BASE_URL}/events/search/getEventBySearch?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `tripping/search/?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };
  return (
    <Col lg="12">
      <div className="search_box">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-4 form__group groupOne">
            <span>
              <i class="ri-map-pin-user-fill"></i>
            </span>
            <div>
              <h5>Places</h5>
              <input type="text" placeholder=" where to?" ref={placesRf} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group groupOne">
            <span>
              <i class="ri-roadster-line"></i>
            </span>
            <div>
              <h5>Length</h5>
              <input type="number" placeholder="miles" ref={lengthRf} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group groupBottom">
            <span>
              <i class="ri-team-line"></i>
            </span>
            <div>
              <h5>Capacity</h5>
              <input type="number" placeholder="0" ref={capacityRf} />
            </div>
          </FormGroup>

          <span className="find_img" type="submit" onClick={searchMee}>
            <i class="ri-search-eye-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}
