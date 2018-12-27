import React, { Component } from 'react';
import { SafeAreaView, Text, Button, AsyncStorage } from 'react-native';

import { store, resetDailyWater } from './store';
import { connect } from 'react-redux';

class DevTools extends Component {
  _getStorageKeys = async () => {
    try {
      const storageKeys = await AsyncStorage.getAllKeys();
      console.log(storageKeys);
    }
    catch (error) {
      console.log(error);
    }
  }

  _resetData = async () => {
    await AsyncStorage.clear();
    this.setState({ results: []});
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Dev Tools</Text>
        <Text>By: Alex Doll</Text>
        <Button
          onPress={this.props.resetDailyWater}
          title='Reset cups drank'
        />
        <Button
          onPress={() => { console.log(store.getState());} }
          title='LOG STATE'
        />
        <Button
          onPress={this._getStorageKeys}
          title='LOG STORAGE'
        />
        <Button
          title='Reset Storage'
          onPress={this._resetData}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  currWater: state.dailyWater.current,
  goal: state.dailyWater.goal,
});

const mapDispatchToProps = () => ({
  resetDailyWater,
});

export default connect(mapStateToProps, mapDispatchToProps())(DevTools);
