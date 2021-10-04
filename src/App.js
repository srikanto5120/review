import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Courses from "./Component/Courses/Courses";

import SingIn from "./Component/SingIn/SingIn";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import Servicess from "./Component/Servises/Servicess";
import PageNotfound from "./Component/PageNotFound/PageNotfound";

function App() {
  return (
    <div className=" container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Servicess></Servicess>
          </Route>
          <Route path="/caurses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/singin">
            <SingIn></SingIn>
          </Route>
          <Route path="*">
            <PageNotfound></PageNotfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
