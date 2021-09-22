import {StyleSheet} from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  link: {
    color: '#297bff',
    textAlign: 'center',
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
});

export default global;
