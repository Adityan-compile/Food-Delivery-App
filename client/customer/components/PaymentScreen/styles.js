import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backIcon: {
    alignSelf: 'flex-start',
    margin: 20,
  },
  screenContainer: {
    margin: 20,
  },
  card: {
    width: '100%',
    height: 50,
  },
  input: {
    height: 50,
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 7,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    marginLeft: 5,
    color: 'grey',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkoutButton: {
    elevation: 5,
    borderRadius: 5,
    margin: 10,
  },
});

export default styles;
