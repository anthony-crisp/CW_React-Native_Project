import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Styles/UsersStyle';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };

  renderRow({ item }) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('Profile', { ...item })} style={styles.row}>
        <Text style={styles.label}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const data = require('../Fixtures/users.json');
    const keyExtractor = (item, index) => index;
    const oneScreensWorth = 20;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={data.people}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={keyExtractor}
          initialNumToRender={oneScreensWorth}
        />
      </View>
    );
  }
}
