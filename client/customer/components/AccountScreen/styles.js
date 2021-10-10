import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  account: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fe6c02',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    elevation: 10,
  },
  infoContainer: {
    height: height / 4,
  },
  image: {
    alignSelf: 'center',
    margin: 10,
    marginTop: 35,
    elevation: 10,
  },
  infoText: {
    textAlign: 'center',
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
