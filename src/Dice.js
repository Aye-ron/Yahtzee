import React, { Component } from 'react';
import Die from './Die';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Dice.css';

class Dice extends Component {
  constructor(props){
    super(props);
    this.handleDClick2 = this.handleDClick2.bind(this);
    this.faces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
  }
  handleDClick2(idx){
    this.props.handleClick(idx);
  }
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.handleDClick2}
          val={this.faces[d-1]}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx}
          rolling = {this.props.rolling}
          disabled = {this.props.disabled} 
          />
      )}
    </div>
  }
}

export default Dice;