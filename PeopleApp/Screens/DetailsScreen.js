import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation'

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
        onPress= { () => navigate('Users') }>Some Details
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {

  },
});
