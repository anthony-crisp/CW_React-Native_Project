import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { autobind } from 'core-decorators';// eslint-disable-line
import styles from './Styles/UsersStyle';
import { API_URL } from '../Helpers/settings';

@autobind
export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  static navigationOptions = {// eslint-disable-line
    title: 'People',
  };
  keyExtractor(item, index) {
    return index;
  }
  componentDidMount() {
    this.getPeople();
  }
  getPeople() {
    fetch(`${API_URL}/all`, { method: 'GET' })
      .then(response => response.json())
      .then(responseJson => this.setState({ isLoading: false, people: responseJson }));
  }

  renderRow({ item }) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('Profile', { ...item })} style={styles.row}>
        <Text style={styles.label}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const oneScreensWorth = 20;
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={this.state.people}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            initialNumToRender={oneScreensWorth}
          />
        )}
      </View>
    );
  }
}
