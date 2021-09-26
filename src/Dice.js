import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  constructor(props){
    super(props);
    this.handleDClick2 = this.handleDClick2.bind(this);
  }
  handleDClick2(idx){
    this.props.handleClick(idx);
  }
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.handleDClick2}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} 
          />
      )}
    </div>
  }
}

export default Dice;