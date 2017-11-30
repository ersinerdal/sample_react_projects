import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={(e) => this.props.buttonOnClick(e)}>{this.props.text}</button>
    );
  }
}

export default Button;
