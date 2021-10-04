import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
  const [courses] = useCourses();

  return (
    <div className="py-5">
      <h2 className="text-center p-5">Our Courses</h2>
      <Row xs={1} md={3} className="g-4">
        {courses.map((course) => (
          <Course key={course.key} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
