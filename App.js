import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import WaterTracker from './WaterTracker';
import Profile from './Profile';
import DevTools from './DevTools';

import { store, setTodaysDate } from './store.js';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'waterTracker',
    }
  }

  componentDidMount() {
    store.dispatch(setTodaysDate());
  }

  _changeTabTo = (tabToSelect) => {
    this.setState({ selectedTab: tabToSelect });
  }

  render() {
    return (
      <Provider store={store}>
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
            <Profile />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'devTools'}
            title='Dev Tools'
            onPress={this._changeTabTo.bind(this, 'devTools')}
          >
            <DevTools />
          </TabBarIOS.Item>
        </TabBarIOS>
      </Provider>
    );
  }
}
