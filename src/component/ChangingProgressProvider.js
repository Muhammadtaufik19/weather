import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: this.props.values.length,
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values);
  }
}

export default ChangingProgressProvider;
