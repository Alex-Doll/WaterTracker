import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, Button, AsyncStorage, FlatList } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    this._retrieveData();
  }

  _retrieveData = async () => {
    let results = [];
    try {
      const allKeys = await AsyncStorage.getAllKeys();

      for (let i = 0; i < allKeys.length; i++) {
        var key = allKeys[i];
        var data = await AsyncStorage.getItem(key);
        results.push([key, data]);
      }
      this.setState({ results });
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    const results = this.state.results.map((result, index) => (
      <Text key={index} style={{color: 'black'}}>{result[0]}: {result[1]}</Text>
    ));

    return (
      <SafeAreaView style={styles.profile}>
        <Text>Welcome to your Profile!</Text>
        <Button
          title='Fetch Data'
          onPress={this._retrieveData}
        />
        {results.length > 0 ? results : <Text>No Saved Data!!!</Text>}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#a8c9f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
