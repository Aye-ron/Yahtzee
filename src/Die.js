import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.state = ({dieAnimation: "Die"}); 
    this.handleDClick = this.handleDClick.bind(this);
  }
  
  handleDClick(){
    this.props.handleClick(this.props.idx);
    this.setState({
      dieAnimation : "Die-rolling"
    });
    this.forceUpdate();
  };
  
  render() {
    console.log(this.props.rolling);
    return (
      <button
        className={this.state.dieAnimation}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleDClick}
      >
        <FontAwesomeIcon icon={this.props.val} />
      </button>

    );
  }
}

export default Die;
