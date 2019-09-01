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
      return (
        <div {...Child.props} ref={this.references[Child.props.id]}>
          {Child}
        </div>
      );
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.hash !== nextProps.location.hash) {
      this.setState({
        ...this.state,
        selectedRoute: this.references[nextProps.location.hash.substring(1)]
          .current.offsetTop,
        isClicked: true
      });
      window.scrollTo({
        top:
          this.references[nextProps.location.hash.substring(1)].current
            .offsetTop - 80,
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
          isClicked: false
        });
      }
      if (
        Math.round(top) < this.state.selectedRoute - 80 &&
        this.state.isClicked === false
      ) {
        const references = Object.keys(this.references);
        const foundIndex = references.findIndex(
          item => item === this.props.location.hash.substring(1)
        );
        this.props.history.push(
          `/#${references[foundIndex - 1] || references[foundIndex]}`
        );
      }
      if (
        Math.round(top) > this.state.selectedRoute - 80 &&
        this.state.isClicked === false
      ) {
        const references = Object.keys(this.references);
        const foundIndex = references.findIndex(
          item => item === this.props.location.hash.substring(1)
        );
        this.props.history.push(
          `/#${references[foundIndex + 1] || references[foundIndex]}`
        );
      }
    });
  }

  render() {
    return <div className="scrollable">{this.data}</div>;
  }
}

export default withRouter(Scrollable);
