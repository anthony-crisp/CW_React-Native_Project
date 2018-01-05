import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation'

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
        onPress= { () => navigate('Profile') }>List of users:
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
});
