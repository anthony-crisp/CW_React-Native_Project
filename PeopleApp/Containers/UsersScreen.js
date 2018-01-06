import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styles from './Styles/UsersStyle'

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };

  data = require('../Fixtures/users.json')

  renderRow ({item}) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress= { () => navigate('Profile') } style={styles.row}>
        <Text style={styles.boldLabel}>{item.name}</Text>
      </TouchableOpacity>
    )
  }


  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.data.people}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    )
  }
}

export default UserScreen;
