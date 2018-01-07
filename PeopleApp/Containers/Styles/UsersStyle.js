import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from './Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.frost,
  },
  row: {
    flex: 1,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    height: 100,
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'stretch',
    fontSize: 25,
    color: Colors.black,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin,
    marginLeft: 10,
  },
  label: {
    alignSelf: 'stretch',
    fontSize: 30,
    color: Colors.black,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin,
    marginLeft: 10,
  },
  userName: {
    alignSelf: 'stretch',
    fontSize: 30,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  userAge: {
    alignSelf: 'stretch',
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    marginTop: Metrics.marginVertical,
  },
  userScore: {
    alignSelf: 'stretch',
    fontSize: 15,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  userBirtday: {
    alignSelf: 'stretch',
    fontSize: 15,
    color: Colors.charcoal,
    textAlign: 'center',
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
  outerCircle: {
    borderRadius: 120,
    alignItems: 'center',
    width: 240,
    height: 240,
    borderWidth: 5,
    borderStyle: 'solid',
    margin: 25,
    borderColor: Colors.frost,
    backgroundColor: 'white',
  },
  userImage: {
    borderRadius: 110,
    alignItems: 'center',
    width: 220,
    height: 220,
    margin: 5,
    marginBottom: 150,
  },
  headerColumn: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: Metrics.smallMargin,
    marginLeft: 10,
    marginRight: 10,
  },
});
