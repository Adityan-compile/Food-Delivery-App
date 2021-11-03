import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homeHeader: {
    height: '22%',
    width: width,
    backgroundColor: '#fe6c02',
    elevation: 10,
  },
  commonHeader: {
    height: '13%',
    width: width,
    backgroundColor: '#fe6c02',
    elevation: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: 'center',
  },
  headingText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
    marginRight: 20,
  },
  input: {
    backgroundColor: 'white',
    color: 'grey',
    height: 40,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    margin: 10,
    marginLeft: 20,
  },
});

export default styles;
