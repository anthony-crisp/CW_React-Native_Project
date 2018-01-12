import React from 'react';
import { DeviceEventEmitter } from 'react-native';
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

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default class App extends React.Component {
  render() {
    return (
      <PeopleApp
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);

          if (prevScreen !== currentScreen) {
            DeviceEventEmitter.emit('updatePeople');
          }
        }}
      />
    );
  }
}
