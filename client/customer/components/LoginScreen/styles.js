import {Dimensions, StyleSheet} from 'react-native';

const systemHeight = Dimensions.get('window').height;
const systemWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: systemHeight / 3,
    width: systemWidth / 2,
    padding: 20,
    marginTop: 50,
    alignSelf: 'center',
  },
  input: {
    padding: 12,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
  },
  link: {
    color: '#297bff',
    textAlign: 'center',
    margin: 20,
  },
  message: {
    color: '#14ab00',
    margin: 20,
  },
  error: {
    color: '#ff1414',
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default styles;
