import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  account: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe6c02',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    elevation: 10,
  },
  body: {
    margin: 30,
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
    textAlignVertical: 'center',
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  edit: {
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  delete: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  buttonContainer: {
    borderRadius: 20,
    margin: 10,
  },
  listContainer: {
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    elevation: 5,
  },
});

export default styles;
