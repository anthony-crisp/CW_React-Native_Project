import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation'
import UserScreen from './Screens/UserScreen'
import DetailsScreen from './Screens/DetailsScreen'


const PeopleApp = StackNavigator({
  UserScreen: { screen: UserScreen },
  Profile: { screen: DetailsScreen },
},
{
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
});

export default class App extends React.Component {
  render() {
    return <PeopleApp />;
  }
}
