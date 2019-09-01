import React from "react";
import { withRouter } from "react-router-dom";

class Scrollable extends React.Component {
  constructor(props) {
    super(props);
    this.references = {};
    this.state = {
      isClicked: false,
      selectedRoute: 0
    };
    this.data = React.Children.map(props.children, (Child, i) => {
      this.references[Child.props.id] = React.createRef();
      return <div ref={this.references[Child.props.id]}>{Child}</div>;
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.hash !== nextProps.location.hash) {
      this.setState({
        selectedRoute: this.references[nextProps.location.hash.substring(1)]
          .current.offsetTop,
        isClicked: true
      });
      window.scrollTo({
        top:
          this.references[nextProps.location.hash.substring(1)].current
            .offsetTop - nextProps.headerHeight,
        behavior: "smooth"
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", _ => {
      const top = Math.round(document.documentElement.scrollTop);

      const sectionPositionWithoutHeader =
        this.state.selectedRoute - this.props.headerHeight;
      if (top === sectionPositionWithoutHeader) {
        this.setState({
          isClicked: false
        });
      }
      if (this.state.isClicked === false) {
        const references = Object.keys(this.references);
        const foundIndex = references.findIndex(
          item => item === this.props.location.hash.substring(1)
        );

        if (top < sectionPositionWithoutHeader) {
          this.props.history.push(
            `/#${references[foundIndex - 1] || references[foundIndex]}`
          );
        }
        if (top > sectionPositionWithoutHeader) {
          this.props.history.push(
            `/#${references[foundIndex + 1] || references[foundIndex]}`
          );
        }
      }
    });
  }

  render() {
    return <div className="scrollable">{this.data}</div>;
  }
}

export default withRouter(Scrollable);
