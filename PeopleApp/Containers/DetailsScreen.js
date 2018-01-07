import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { getAge, birthdayThisYear, dateDiff } from '../Helpers/dateHelpers.js';
import styles from './Styles/UsersStyle';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    const { name, avatar, dob, score } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Card>
          <View style={styles.headerColumn}>
            <View style={styles.outerCircle}>
              <Image style={styles.userImage} source={{ uri: avatar }} />
            </View>
          </View>
          <View style={styles.headerColumn}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userAge}>{getAge(dob)}</Text>
            <Text style={styles.userBirtday}>{dateDiff(birthdayThisYear(dob), new Date())}</Text>
            <Text style={styles.userScore}>Rating: {score}</Text>
          </View>
          <Button
            style={styles.editButton}
            backgroundColor={'#03A9F4'}
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              marginTop: 20,
            }}
            title="Edit"
          />
        </Card>
      </ScrollView>
    );
  }
}
