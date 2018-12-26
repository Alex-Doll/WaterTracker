import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, AsyncStorage } from 'react-native';
import { store, addDailyWater, resetDailyWater } from './store';
import { connect } from 'react-redux';

class WaterTracker extends Component {
  render() {
    const isWaterGoalMet = this.props.cupsDrankToday >= this.props.amtCupsToDrink;
    return (
      <SafeAreaView style={styles.waterTracker}>
        <Text>{this.props.today}</Text>
        <Text style={styles.tracker}>{this.props.cupsDrankToday} / {this.props.amtCupsToDrink}</Text>
        { isWaterGoalMet && <Text style={styles.goal}>Daily Water Goal Reached!</Text> }
        <Button
          style={styles.button}
          onPress={this.props.addDailyWater.bind(this, 1)}
          title='8oz.'
        />
        <Button
          style={styles.button}
          onPress={this.props.addDailyWater.bind(this, 2)}
          title='16oz.'
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

const mapStateToProps = (state) => ({
  cupsDrankToday: state.dailyWater.current,
  amtCupsToDrink: state.dailyWater.goal,
  today: state.today,
});

const mapDispatchToProps = () => ({
  addDailyWater,
  resetDailyWater,
});

export default connect(mapStateToProps, mapDispatchToProps())(WaterTracker);
