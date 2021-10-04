import React from "react";
import { Col, Row } from "react-bootstrap";
import feedbackImg from "../../Image/feedback.png";
import "./FeedBack.css";

const FeedBack = () => {
  return (
    <Row className="  align-items-center">
      <Col md={6}>
        <img className="img-fluid" src={feedbackImg} alt="" />
      </Col>
      <Col md={6}>
        <h3 className="fw-bold">Our Learners Feedback</h3>
        <p className="text ">
          Its had a fear most experiance me that i feel a freat assumeption that
          never thought that will happens to But great provocatives things
          appropitues received without Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Harum, non?
        </p>
        <div className="student">
          <p className="fw-bold">Wingston</p>

          <small className="text">California, usa</small>
        </div>
      </Col>
    </Row>
  );
};

export default FeedBack;
