import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts } from '../styles/base';

class AnimatedWaterGlass extends Component {
  render() {
    const isGlassFull = this.props.partialAmt >= this.props.fullAmt;
    const fractionFull = isGlassFull ? 1 : (this.props.partialAmt / this.props.fullAmt);
    return (
      <View style={styles.container}>
      <View style={styles.glass}>
        <View style={{
          ...styles.water,
          height: 90 * fractionFull,
        }}></View>
      </View>
      <Text style={styles.tracker}>{this.props.partialAmt} / {this.props.fullAmt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  glass: {
    height: 100,
    width: 100,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomColor: colors.tertiary,
    borderLeftColor: colors.tertiary,
    borderRightColor: colors.tertiary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  water: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  tracker: {
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    color: colors.tertiary,
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({
  partialAmt: state.dailyWater.current,
  fullAmt: state.dailyWater.goal,
});

export default connect(mapStateToProps, null)(AnimatedWaterGlass);
