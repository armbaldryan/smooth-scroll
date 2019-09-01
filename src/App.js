import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import { withRouter } from "react-router-dom";
import Scrollable from "./Components/scrollable";

const App = () => (
  <div className="App">
    <Navbar />
    <Scrollable headerHeight={80}>
      <Section title="Section 1" subtitle={dummyText} id="section1" />
      <Section title="Section 2" subtitle={dummyText} id="section2" />
      <Section title="Section 3" subtitle={dummyText} id="section3" />
    </Scrollable>
  </div>
);

export default withRouter(App);
