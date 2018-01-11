import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { autobind } from 'core-decorators';// eslint-disable-line
import { getAge, birthdayThisYear, dateDiff } from '../Helpers/dateHelpers';
import renderIf from '../Helpers/renderHelper';
import styles from './Styles/UsersStyle';

@autobind
export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditMode: false, score: props.navigation.state.params.score };
  }
  static navigationOptions = {// eslint-disable-line
    title: 'Detail View',
  };
  enterEditMode() {
    this.setState({ isEditMode: true });
  }
  increment() {
    this.setState({
      score: this.state.score + 1,
    });
  }
  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }

  exitEditModeSave() {
    const newScore = this.state.score;
    this.setState({ isEditMode: false, score: newScore });
  }
  exitEditModeCancel() {
    const oldScore = this.props.navigation.state.params.score;
    this.setState({ isEditMode: false, score: oldScore });
  }

  render() {
    const { name, avatar, dob, score } = this.props.navigation.state.params;
    const editButton = (
      <Button buttonStyle={styles.editButton} title="Edit" onPress={this.enterEditMode} />
    );
    const editMode = (
      <View style={styles.editView}>
        <Button
          buttonStyle={styles.cancelButton}
          title="Cancel"
          onPress={this.exitEditModeCancel}
        />
        <Button buttonStyle={styles.saveButton} title="Save" onPress={this.exitEditModeSave} />
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
                  textStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
                  title="-"
                  onPress={this.decrement}
                />
              ) : null}
              <Text style={styles.userScore}>{this.state.score ? this.state.score : score}</Text>
              {this.state.isEditMode ? (
                <Button
                  buttonStyle={styles.incrementButton}
                  textStyle={styles.incrementText}
                  title="+"
                  onPress={this.increment}
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
