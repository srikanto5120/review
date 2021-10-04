import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Servicess = () => {
  const [services, setServisess] = useState([]);
  useEffect(() => {
    fetch("./serveses.json")
      .then((res) => res.json())
      .then((data) => setServisess(data));
  }, []);
  return (
    <div>
      <h1 className=" text-center py-5">Our Services</h1>
      <Row xs={1} md={3} className="service">
        {services.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Servicess;
