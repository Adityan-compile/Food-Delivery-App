import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homeHeader: {
    height: '22%',
    width: width,
    backgroundColor: '#fe6c02',
    elevation: 10,
  },
  cartHeader: {
    height: '13%',
    width: width,
    backgroundColor: '#fe6c02',
    elevation: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 20,
    marginLeft: 5,
  },
  input: {
    backgroundColor: 'white',
    color: 'grey',
    height: 40,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default styles;
