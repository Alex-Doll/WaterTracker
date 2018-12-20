import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import WaterTracker from './WaterTracker';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'waterTracker',
    }
  }

  _changeTabTo = (tabToSelect) => {
    this.setState({ selectedTab: tabToSelect });
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'waterTracker'}
          title='Water Tracker'
          onPress={this._changeTabTo.bind(this, 'waterTracker')}
        >
          <WaterTracker />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'profile'}
          title='Profile'
          onPress={this._changeTabTo.bind(this, 'profile')}
        >
          <WaterTracker />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
