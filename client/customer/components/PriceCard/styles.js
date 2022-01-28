import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  priceCard: {
    margin: 20,
    elevation: 5,
    borderRadius: 10,
  },
  text: {
    alignSelf: 'flex-start',
  },
  value: {
    alignSelf: 'flex-end',
  },
});

export default styles;
