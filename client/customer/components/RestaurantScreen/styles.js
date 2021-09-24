import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cover: {
    width: width,
    height: height / 3,
  },
});

export default styles;
