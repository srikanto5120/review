import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, image } = props.service;

  return (
    <div className="single-card service ">
      <Col>
        <Card>
          <Card.Img className="service-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <button className="btn btn-primary">Details</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
