import React from "react";
import "./searchBox.css";
import { Form, FormGroup, Col } from "reactstrap";

export default function SearchBox() {
  return (
    <Col lg="12">
      <div className="search_box">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-user-fill"></i>
            </span>
            <div>
              <h5>Places</h5>
              <input type="text" placeholder="where to?" />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group form__group-last">
            <span>
              <i class="ri-rocket-line"></i>
            </span>
            <div>
              <h5>Length</h5>
              <input type="number" placeholder="miles" />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-4 form__group form__group-last">
            <span>
              <i class="ri-team-line"></i>
            </span>
            <div>
              <h5>Capacity</h5>
              <input type="number" placeholder="0" />
            </div>
          </FormGroup>
        </Form>
      </div>
    </Col>
  );
}
