import React, { Component } from 'react';
import '../App.css';


class Button extends Component {
    
  onClickEvent = (e) => {
    this.props.onClickEvent(e.target.id)
  }

    render() {
    return (
      <div className="button" id={this.props.value} onClick={this.onClickEvent}>
        {this.props.value}
      </div>
    );
  }
}

export default Button;
