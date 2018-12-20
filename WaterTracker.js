import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <View style={styles.waterTracker}>
        { this.state.isWaterGoalMet && <Text style={styles.goal}>You've reached your goal for today!</Text> }
        <Text style={styles.tracker}>{this.state.cupsDrankToday} / {this.state.amtCupsToDrink}</Text>
        <Button
          style={styles.button}
          onPress={this.addWater}
          title='I drank a cup of water!'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  waterTracker: {
    flex: 1,
    backgroundColor: '#a8c9ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  goal: {
    color: 'red'
  },
  tracker: {
    color: 'white'
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  }
});
