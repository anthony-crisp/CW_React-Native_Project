import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from './Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.frost
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  row: {
    flex: 1,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    height: 100,
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    // fontWeight: 'regular',
    alignSelf: 'stretch',
    fontSize: 25,
    color: Colors.black,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin,
    marginLeft: 10
  },
  label: {
    textAlign: 'center',
    color: Colors.charcoal
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
