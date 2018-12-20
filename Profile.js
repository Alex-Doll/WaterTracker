import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <Text>Welcome to your Profile!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
