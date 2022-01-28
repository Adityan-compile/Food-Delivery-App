import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    height: height / 5.7,
    elevation: 3,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    margin: 15,
    height: '80%',
    width: 100,
    borderRadius: 10,
  },
  text: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  info: {
    margin: 5,
  },
  price: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff421c',
  },
  delete: {
    margin: 20,
  },
  quantity: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default styles;
