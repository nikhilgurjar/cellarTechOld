import React from "react";
import ReactDOM from "react-dom";
import Landing from "./landingPage";
import About from "./about";
import Services from "./services";
import TeamSection from "./Teams";
import Testimonials from "./TestimonialCard";
import Footer from "./footer";
import Navbar from "./Navbar";
import Contact from "./contactUs";
import Portfolio from "./portfolio";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Container } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing id={"home"} />
      <About id={"about"} />
      <Services id={"services"} />
      <Contact id={"contact"} />
      <Portfolio id={"portfolio"} />
      <Testimonials id={"testimonial"} />
      <TeamSection id={"team"} />
      <Footer name={"footerSection"} id={"footerSection"} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
