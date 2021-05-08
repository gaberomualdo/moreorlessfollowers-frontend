import React, { Component } from 'react';

export default class ScreenHeightStyleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: '100vh',
    };
    this.updateScreenHeight = this.updateScreenHeight.bind(this);
  }
  updateScreenHeight() {
    this.setState({ screenHeight: `${window.innerHeight}px` });
  }
  componentDidMount() {
    this.updateScreenHeight();
    window.addEventListener('resize', this.updateScreenHeight);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenHeight);
  }
  render() {
    return <div style={{ '--screen-height': this.state.screenHeight }}>{this.props.children}</div>;
  }
}
