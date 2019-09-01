import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSelectedHash: "",
      newSelectedHash: props.history.location.hash,
      isClicking: false,
      selectedRoute: 0
    };
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.routes = {
      section1: this.section1,
      section2: this.section2,
      section3: this.section3
    };
  }

  async componentWillReceiveProps(nextProps) {
    if (
      this.props.location.hash !== nextProps.location.hash &&
      this.state.newSelectedHash !== nextProps.location.hash
    ) {
      console.log(5);
      await this.setState({
        ...this.state,
        selectedRoute: this.routes[nextProps.location.hash.substring(1)].current
          .offsetTop,
        isClicking: true
      });
      await window.scrollTo({
        top:
          this.routes[nextProps.location.hash.substring(1)].current.offsetTop -
          80,
        behavior: "smooth"
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", _ => {
      const top = document.documentElement.scrollTop;
      if (Math.round(top) === this.state.selectedRoute - 80) {
        this.setState({
          ...this.state,
          isClicking: false
        });
      }
      if (
        Math.round(top) < this.state.selectedRoute - 80 &&
        this.state.isClicking === false &&
        this.props.location.hash === "#section2"
      ) {
        this.props.history.push("/#section1");
      }
      if (
        Math.round(top) > this.state.selectedRoute - 80 &&
        this.state.isClicking === false &&
        (this.props.location.hash === "#section1" ||
          this.props.location.hash === "")
      ) {
        this.props.history.push("/#section2");
      }
      if (
        Math.round(top) > this.state.selectedRoute - 80 &&
        this.state.isClicking === false &&
        this.props.location.hash === "#section2"
      ) {
        this.props.history.push("/#section3");
      }
      if (
        Math.round(top) < this.state.selectedRoute - 80 &&
        this.state.isClicking === false &&
        this.props.location.hash === "#section3"
      ) {
        this.props.history.push("/#section2");
      }
    });
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", _ => {
  //     const top = document.documentElement.scrollTop;
  //     // if (document.body.getBoundingClientRect().top > scrollPos)
  //     //   props.history.push("/#section1");
  //     // else props.history.push("/#section2");
  //     // saves the new position for iteration.
  //     // if (
  //     //   top > section1.current.offsetTop - 80 &&
  //     //   top < section1.current.offsetTop + 81 &&
  //     //   props.history.location.hash !== "#section2"
  //     // ) {
  //     //   props.history.push("/#section2");
  //     // }
  //     if (
  //       top < section2.current.offsetTop &&
  //       selectedHash.oldSelectedHash === "#section2"
  //     ) {
  //       console.log(selectedHash);
  //       // props.history.push("/#section1");
  //     }
  //   });
  // }, [props.history, selectedHash, selectedHash.oldSelectedHash]);

  render() {
    return (
      <div className="App">
        <Navbar />
        <div ref={this.section1}>
          <Section
            title="Section 1"
            subtitle={dummyText}
            dark={true}
            id="section1"
          />
        </div>
        <div ref={this.section2}>
          <Section
            title="Section 2"
            subtitle={dummyText}
            dark={false}
            id="section2"
          />
        </div>
        <div ref={this.section3}>
          <Section
            title="Section 3"
            subtitle={dummyText}
            dark={true}
            id="section3"
          />
        </div>
      </div>
    );
  }
}
export default withRouter(App);
