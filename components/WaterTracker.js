import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, AsyncStorage, View } from 'react-native';
import { store, addDailyWater, resetDailyWater } from '../store';
import { connect } from 'react-redux';

class WaterTracker extends Component {
  renderTrackers = () => {
    let trackers = [];

    for (let i = 0; i < this.props.cupsGoal; i++) {
      trackers.push(
        <View
          key={i}
          style={(i < this.props.cupsDrank) ? styles.complete : styles.incomplete}
        ></View>
      );
    }

    return trackers;
  }

  render() {
    const isWaterGoalMet = this.props.cupsDrank >= this.props.cupsGoal;

    return (
      <SafeAreaView style={styles.waterTracker}>
        <Text>{this.props.today}</Text>
        <View style={styles.tracker}>
          { this.renderTrackers() }
        </View>
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
    padding: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  complete: {
    margin: 5,
    height: 10,
    width: 10,
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  incomplete: {
    margin: 5,
    height: 10,
    width: 10,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  }
});

const mapStateToProps = (state) => ({
  cupsDrank: state.dailyWater.current,
  cupsGoal: state.dailyWater.goal,
  today: state.today,
});

const mapDispatchToProps = () => ({
  addDailyWater,
  resetDailyWater,
});

export default connect(mapStateToProps, mapDispatchToProps())(WaterTracker);
