import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class WaterTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cupsDrankToday: 0,
      amtCupsToDrink: 8,
      isWaterGoalMet: false
    };
  }

  addWater = (event) => {
    this.setState(prevState => {
      const newCupsAmt = prevState.cupsDrankToday + 1;
      return {
        cupsDrankToday: newCupsAmt,
        isWaterGoalMet: newCupsAmt >= prevState.amtCupsToDrink
      };
    });
  }

  render() {
    return (
      <View>
        { this.state.isWaterGoalMet && <Text>You've reached your goal for today!</Text> }
        <Text>{this.state.cupsDrankToday} / {this.state.amtCupsToDrink}</Text>
        <Button
          onPress={this.addWater}
          title='I drank a cup of water!'
        />
      </View>
    );
  }
}
