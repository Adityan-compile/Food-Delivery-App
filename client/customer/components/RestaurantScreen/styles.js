import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cover: {
    width: width,
    height: height / 3,
  },
  heading: {
    fontWeight: '900',
    margin: 10,
    fontSize: 20,
    fontStyle: 'italic',
    color: '#383838',
    textAlign: 'center',
  },
  heartIcon: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  infoIcon: {
    marginLeft: 20,
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 5,
    marginTop: 10,
  },
  cuisines: {
    textAlign: 'center',
    color: 'grey',
  },
  infoTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 10,
    fontSize: 20,
  },
  hourGlass: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
});

export default styles;
