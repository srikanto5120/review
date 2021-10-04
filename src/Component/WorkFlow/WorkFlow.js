import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../Image/hero-men2.png";

import "./WorkFlow.css";
const WorkFlow = () => {
  return (
    <div className="py-5">
      <h1 className="text-center py-5">Our Work Flow</h1>
      <Row xs={1} md={3} className="g-4  ">
        <Col md={4} className="work-flow">
          <div className="work-flow-icon ">
            <i className="fas  work-icon fa-search"></i>
          </div>
          <h3>Find Your Course</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            dicta sint, soluta non consequatur eos? Sequi voluptatem excepturi
            iure, aspernatur temporibus aut pariatur tempora nam ea repellendus
            quae veritatis.
          </p>
        </Col>
        <Col md={4} className="work-flow">
          <div className="work-flow-icon ">
            <i className="fas  work-icon fa-search"></i>
          </div>
          <h3>Book Your Seat</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            dicta sint, soluta non consequatur eos? Sequi voluptatem excepturi
            iure, aspernatur temporibus aut pariatur tempora nam ea repellendus
            quae veritatis.
          </p>
        </Col>
        <Col md={4} className="work-flow">
          <div className="work-flow-icon ">
            <i className="fas  work-icon fa-search"></i>
          </div>
          <h3>Instant Certified</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            dicta sint, soluta non consequatur eos? Sequi voluptatem excepturi
            iure, aspernatur temporibus aut pariatur tempora nam ea repellendus
            quae veritatis.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default WorkFlow;
