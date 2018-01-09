import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { autobind } from 'core-decorators';// eslint-disable-line
import { getAge, birthdayThisYear, dateDiff } from '../Helpers/dateHelpers.js';
import renderIf from '../Helpers/renderHelper.js';
import styles from './Styles/UsersStyle';
@autobind
export default class DetailsScreen extends React.Component {
  constructor(props) {
    super();
    this.state = { isEditMode: false };
  }
  static navigationOptions = {// eslint-disable-line
    title: 'Detail View',
  };
  enterEditMode() {
    this.setState({ isEditMode: true });
  }

  exitEditMode() {
    this.setState({ isEditMode: false });
  }
  render() {
    const { name, avatar, dob, score } = this.props.navigation.state.params;
    const editButton = (
      <Button buttonStyle={styles.editButton} title="Edit" onPress={this.enterEditMode} />
    );
    const editMode = (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Button buttonStyle={styles.cancelButton} title="Cancel" onPress={this.exitEditMode} />
        <Button buttonStyle={styles.saveButton} title="Save" onPress={this.exitEditMode} />
      </View>
    );

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
            <Text style={styles.userBirthday}>{dateDiff(birthdayThisYear(dob), new Date())}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.userScore}>Rating: </Text>
              {this.state.isEditMode ? (
                <Button
                  buttonStyle={styles.incrementButton}
                  textStyle={{ color: 'black' }}
                  title="-"
                />
              ) : null}
              <Text style={styles.userScore}>{score}</Text>
              {this.state.isEditMode ? (
                <Button
                  buttonStyle={styles.incrementButton}
                  textStyle={{ color: 'black' }}
                  title="+"
                />
              ) : null}
            </View>
          </View>
          <View>
            {renderIf(!this.state.isEditMode, editButton)}
            {renderIf(this.state.isEditMode, editMode)}
          </View>
        </Card>
      </ScrollView>
    );
  }
}
