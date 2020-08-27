import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "../index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// import group from "./img/svg/group.svg";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Media = React.lazy(() => import("./pages/Media"));
const Team = React.lazy(() => import("./pages/Team"));
const Contact = React.lazy(() => import("./pages/Contact"));


export default function App() {
  const location = useLocation()
  console.log(location)

  return (
    <React.Fragment>
      <Nav />
      <div className="container__main">
        <div className="container__body">
          <React.Suspense fallback={<Loading />}>
              <TransitionGroup>
                <CSSTransition timeout={250} classNames="fade" key={location.key}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/team" component={Team} />
                    <Route path="/involved" component={Media} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/*">404 Page not found</Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup> 
          </React.Suspense>
        </div>
      </div>
      <Footer className="footer" />
      </React.Fragment>
  );
}
