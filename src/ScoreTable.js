import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  constructor(props){
    super(props);
    this.descriptions = {
      "Ones" : "Score 1 for every 1",
      "Twos" : "Score 2 for every 2",
      "Threes" : "Score 3 for every 3",
      "Fours": "Score 4 for every 4",
      "Fives": "Score 5 for every 5",
      "Sixes": "Score 6 for every 6",
      "Three of Kind": "Sum all dice if 3 are the same",
      "Four of Kind": "Sum all dice if 4 are the same",
      "Full House": "3 and 2 of a value, score 25",
      "Small Straight": "4+ consecutive in a row, score 30",
      "Large Straight": "If 5 consecutive in a row, score 40",
      "Yahtzee": "If all values match, score 50",
      "Chance": "Sum of all dice"
    }
  }


  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones}    description = {this.descriptions['Ones']}      doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={scores.twos}     description = {this.descriptions['Twos']}      doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={scores.threes} description = {this.descriptions['Threes']}  doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={scores.fours}   description = {this.descriptions['Fours']}   doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={scores.fives}    description = {this.descriptions['Fives']}   doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={scores.sixes}    description = {this.descriptions['Sixes']}   doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind}    description = {this.descriptions['Three of Kind']}   doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind}    description = {this.descriptions['Four of Kind']}     doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse}       description = {this.descriptions['Full House']}      doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={scores.smallStraight} description = {this.descriptions['Small Straight']}    doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={scores.largeStraight} description = {this.descriptions['Large Straight']}    doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={scores.yahtzee}             description = {this.descriptions['Yahtzee']}   doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance}              description = {this.descriptions['Chance']}   doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;