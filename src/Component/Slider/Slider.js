import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../Image/hero-men2.png";

const Slider = () => {
  return (
    <Row className="d-flex  align-items-center ">
      <Col>
        <img className="h-75 w-75 " src={img} alt="" />
      </Col>

      <Col>
        <h3>Learn Any Where Any Time Divice Only</h3>
        <p>
          Online learnng is not the big not thing is now the gratest things ever
        </p>
        <button className="btn btn-primary">Get Started</button>
      </Col>
    </Row>
  );
};

export default Slider;
