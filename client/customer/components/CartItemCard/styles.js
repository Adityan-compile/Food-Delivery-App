import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    borderRadius: 10,
    height: height / 5.7,
    elevation: 3,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default styles;
