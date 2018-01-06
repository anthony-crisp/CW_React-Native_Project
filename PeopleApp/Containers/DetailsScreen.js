import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import styles from './Styles/UsersStyle';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    const { name, avatar, dob, score } = this.props.navigation.state.params;
    return (
      <View style={styles.headerColumn}>
        <View style={styles.outerCircle}>
          <Image
            style={styles.userImage}
            source={{
              uri: avatar,
            }}
          />
        </View>
      </View>
    );
  }
}
