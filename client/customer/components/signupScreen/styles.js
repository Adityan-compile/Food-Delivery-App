import {Dimensions, StyleSheet} from 'react-native';

const systemHeight = Dimensions.get('window').height;
const systemWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logo: {
    height: systemHeight / 3,
    width: systemWidth / 2,
    padding: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default styles;
