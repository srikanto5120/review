import React from "react";

import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const { name, category, price, star, img, lesson, student } = props.course;
  return (
    <Col>
      <div className=" p-2  single-card rounded-3  ">
        <Card.Img variant="top" src={img} />
        <div className="d-flex justify-content-between">
          <p className=" category rounded   px-2 py-1">{category}</p>

          <p className="text-warning">${price}</p>
        </div>
        <h6>{name}</h6>
        <div className="d-flex justify-content-between">
          <p>{lesson} lessions</p>
          <p>{student} Students</p>
        </div>
        <Rating
          className="icon"
          initialRating={star}
          emptySymbol="fa fa-star-o  "
          fullSymbol="fa fa-star  "
          readonly
        />
        <span>{star}</span>
      </div>
    </Col>
  );
};

export default Course;
