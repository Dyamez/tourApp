import React, { useRef } from "react";
import "./searchBox.css";
import { Form, FormGroup, Col } from "reactstrap";

export default function SearchBox() {
  const placesRf = useRef("");
  const lengthRf = useRef(0);
  const capacityRf = useRef(0);

  const searchMee = () => {
    const places = placesRf.current.value;
    const length = lengthRf.current.value;
    const capacity = capacityRf.current.value;
    if (places === "" || length === "" || capacity === "") {
      return alert("please fill all boxes");
    }
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
              <input type="text" placeholder="where to?" ref={placesRf} />
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

          <span onclick={searchMee} className="find_img" type="submit">
            <i class="ri-search-eye-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}
