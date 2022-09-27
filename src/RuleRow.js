import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props){
    super(props);
    this.state = ({clicked : false});
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    if (!this.state.clicked){
      this.props.doScore();
      this.setState({clicked : true});
    };
  }
  render() {
    let ruleRowDisplayType = "RuleRow RuleRow-active"; 
    if (this.state.clicked){
      ruleRowDisplayType = "RuleRow-disabled";
    };
    return (
      <tr className={ruleRowDisplayType} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.state.clicked ? this.props.score : this.props.description}</td>
      </tr>
    )
  }
}

export default RuleRow;