import React, { Component } from 'react';
import commaNumber from 'comma-number';

const frames = 100;
const animationTimeMS = 400;

export default class AnimatedNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 0,
      updateNumberInterval: undefined,
    };
    this.updateNumberInterval = this.updateNumberInterval.bind(this);
  }
  updateNumberInterval() {
    if (this.state.currentFrame === frames) {
      clearInterval(this.state.updateNumberInterval);
    } else {
      this.setState({ currentFrame: this.state.currentFrame + 1 });
    }
  }
  componentDidMount() {
    this.setState({ updateNumberInterval: setInterval(this.updateNumberInterval, animationTimeMS / frames) });
  }
  render() {
    const increasePerFrame = (this.props.number || 0) / frames; // default number is 0 if provided number prop is bad
    let currentNumber = increasePerFrame * this.state.currentFrame;
    return <>{commaNumber(Math.floor(currentNumber))}</>;
  }
}
