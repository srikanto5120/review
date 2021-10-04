import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import about from "../../Image/about.png";
import "./UserRatting.css";

const UserTating = () => {
  return (
    <div className="d-flex mt-5">
      <Row xs={1} md={2} className="g-4  user ">
        <Col className="user-contianer">
          <Card.Img className="user-img" variant="top" src={about} />
          <div className="user-ratting">
            <h2>4.9+</h2>
            <p>star</p>
            <p>user ratting</p>
          </div>
          <div className="user-active">
            <h3>50k+</h3>
            <p>love</p>
            <p>Active Courses</p>
          </div>
        </Col>
        <Col>
          <h3>We Make Your Learning Through Awesome</h3>
          <p>
            Become the dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet.
          </p>
          <button className="btn btn-primary">Learn more</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserTating;
