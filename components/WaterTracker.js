import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, AsyncStorage, View } from 'react-native';
import { addDailyWater, resetDailyWater } from '../actions';
import { connect } from 'react-redux';
import { dimensions, colors, fonts } from '../styles/base';
import AnimatedWaterGlass from './AnimatedWaterGlass';

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
        <Text style={styles.today}>{this.props.today}</Text>
        <AnimatedWaterGlass />
        { isWaterGoalMet && <Text style={styles.goal}>Daily Water Goal Reached!</Text> }
        <View style={styles.buttonContainer}>
          <Button
            style={styles.waterButton}
            onPress={this.props.addDailyWater.bind(this, 1)}
            color={colors.tertiary}
            title='8oz.'
          />
          <Button
            style={styles.waterButton}
            onPress={this.props.addDailyWater.bind(this, 2)}
            color={colors.tertiary}
            title='16oz.'
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  waterTracker: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    backgroundColor: colors.primary,
  },
  today: {
    color: colors.tertiary,
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
  },
  goal: {
    fontFamily: fonts.primary,
  },
  tracker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  complete: {
    height: fonts.lg,
    width: fonts.lg,
    borderWidth: 1,
    borderRadius: fonts.lg/2,
    borderColor: colors.tertiary,
    backgroundColor: colors.secondary,
    margin: fonts.sm * 0.5,
  },
  incomplete: {
    height: fonts.lg,
    width: fonts.lg,
    borderWidth: 1,
    borderRadius: fonts.lg/2,
    borderColor: colors.tertiary,
    backgroundColor: colors.tertiary,
    margin: fonts.sm * 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  waterButton: {
    fontFamily: fonts.primary,
  },
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
