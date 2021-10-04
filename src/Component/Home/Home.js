import React from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import Courses from "../Courses/Courses";
import FeedBack from "../FeedBack/FeedBack";
import Servicess from "../Servises/Servicess";
import SingIn from "../SingIn/SingIn";
import Slider from "../Slider/Slider";
import UserTating from "../UserRatting/UserTating";
import WorkFlow from "../WorkFlow/WorkFlow";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WorkFlow></WorkFlow>
      <UserTating></UserTating>
      <Servicess></Servicess>

      <Courses></Courses>
      <FeedBack></FeedBack>
      <SingIn></SingIn>
    </div>
  );
};

export default Home;
