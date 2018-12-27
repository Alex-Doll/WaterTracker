import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import WaterTracker from './components/WaterTracker';
import Profile from './components/Profile';
import DevTools from './components/DevTools';

import { store } from './store.js';
import { setTodaysDate, initializeDailyWater } from './actions';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'waterTracker',
    }
  }

  componentWillMount() {
    store.dispatch(setTodaysDate());
    store.dispatch(initializeDailyWater());
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
