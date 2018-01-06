import React from 'react';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import UsersScreen from './Containers/UsersScreen';
import DetailsScreen from './Containers/DetailsScreen';

export const PeopleApp = StackNavigator(
  {
    Users: { screen: UsersScreen },
    Profile: { screen: DetailsScreen },
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight,
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <PeopleApp />;
  }
}
