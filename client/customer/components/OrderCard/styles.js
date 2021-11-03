import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 10,
    elevation: 2,
    height: height / 3.5,
    width: width / 1.2,
    borderRadius: 6,
    alignSelf: 'center',
  },
  orderNo: {
    fontStyle: 'italic',
    fontSize: 20,
    color: 'grey',
    marginLeft: 10,
  },
  btn: {
    margin: 6,
  },
  total: {
    color: '#ff421c',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default styles;
