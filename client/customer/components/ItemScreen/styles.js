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
    textShadowRadius: 3,
    color: '#383838',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: 'grey',
    margin: 10,
    padding: 5,
    letterSpacing: 2,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 10,
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    padding: 10,
    color: '#ff421c',
  },
  originalPrice: {
    fontSize: 20,
    padding: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  button: {
    margin: 20,
    borderRadius: 20,
  },
  quantity: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default styles;
