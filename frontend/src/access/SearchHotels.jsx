import React, { useRef } from "react";
import "./searchHotel.css";
import { Form, FormGroup, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
//import { BASE_URL } from "../tools/configuration";

export default function SearchHotel() {
  const titleRF = useRef("");
  //const placesRf = useRef("");
  const lengthRf = useRef(0);
  const capacityRf = useRef(0);
  const navigate = useNavigate();

  const searchMee = async () => {
    const title = titleRF.current.value;
    //const city = placesRf.current.value;
    const distance = lengthRf.current.value;
    const maxGroupSize = capacityRf.current.value;
    if (title === "" || distance === "" || maxGroupSize === "") {
      return alert("All Boxes must be Filled");
    }

    const res = await fetch(
      `https://backend-fun.onrender.com/api/v1/tours/search/getTourBySearch?title=${title}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      //`https://backend-fun.onrender.com/api/v1/hotels/search/getHotelBySearch?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `tripping/search/?title=${title}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
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
              <h5>Name</h5>
              <input type="text" placeholder=" where to?" ref={titleRF} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group groupOne">
            <span>
              <i class="ri-roadster-line"></i>
            </span>
            <div>
              <h5>Distance</h5>
              <input type="number" placeholder="miles" ref={lengthRf} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group groupBottom">
            <span>
              <i class="ri-team-line"></i>
            </span>
            <div>
              <h5>Occupacy</h5>
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
