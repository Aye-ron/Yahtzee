import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleDClick = this.handleDClick.bind(this);
  }
  
  handleDClick(){
    this.props.handleClick(this.props.idx);
  };
  
  render() {
    let classes = "Die";
    if (this.props.locked) classes += "-locked";
    if (this.props.rolling) classes += "-rolling"

    return (
      <button
        className={classes}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleDClick}
        disabled = {this.props.disabled}
      >
        <FontAwesomeIcon icon={this.props.val} />
      </button>
    );
  }
}

export default Die;
