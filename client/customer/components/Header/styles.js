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
    height: '30%',
    width: width,
    backgroundColor: '#fe6c02',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    elevation: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
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
  priceCard: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 30,
    elevation: 6,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'italic',
    marginHorizontal: 20,
    alignSelf: 'flex-start',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 20,
    alignSelf: 'flex-start',
  },
  value: {
    alignSelf: 'flex-end',
    color: 'grey',
    marginTop: 0,
    marginHorizontal: 10,
    padding: 0,
  },
});

export default styles;
