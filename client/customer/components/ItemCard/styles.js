import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    height: height / 2.4,
    width: width / 1.05,
    elevation: 6,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: height / 3.7,
    width: width / 1.1,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  body: {
    color: 'grey',
    fontStyle: 'italic',
  },
  price: {
    fontWeight: 'bold',
  },
});

export default styles;
