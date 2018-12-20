import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, AsyncStorage } from 'react-native';

export default class WaterTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cupsDrankToday: 0,
      amtCupsToDrink: 8,
      isWaterGoalMet: false
    };
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem((new Date()).toLocaleString(), `${this.state.cupsDrankToday} / ${this.state.amtCupsToDrink}, goal met: ${this.state.isWaterGoalMet}`);
    }
    catch (error) {
      console.log(error);
    }
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

  resetCups = () => {
    this.setState({ cupsDrankToday: 0 });
  }

  render() {
    return (
      <SafeAreaView style={styles.waterTracker}>
        { this.state.isWaterGoalMet && <Text style={styles.goal}>You've reached your goal for today!</Text> }
        <Text style={styles.tracker}>{this.state.cupsDrankToday} / {this.state.amtCupsToDrink}</Text>
        <Button
          style={styles.button}
          onPress={this.addWater}
          title='I drank a cup of water!'
        />
        <Button
          onPress={this.resetCups}
          title='Reset cups drank'
        />
        <Button
          onPress={this._storeData}
          title='Save Water Data'
        />
      </SafeAreaView>
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
    color: 'red',
  },
  tracker: {
    color: 'white',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  }
});
