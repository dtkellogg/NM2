import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./components/Contact";
import Involved from "./pages/Involved";
// import group from "./img/svg/group.svg";


export default function App() {
  return (
    <Router>
      <div className="container__main">
        <Nav />
        <div className="container__body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/involved" component={Involved} />
            <Route path="/contact" component={Contact} />
            <Route path="/*">404 Page not found</Route>
          </Switch>
        </div>
      </div>
        <Footer className="footer"/>
    </Router>
  );
}
