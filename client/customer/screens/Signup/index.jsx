import React, {useEffect} from 'react';

import SignupScreen from '../../components/signupScreen';
import {View} from 'react-native';

const Signup = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <SignupScreen></SignupScreen>
    </View>
  );
};

export default Signup;
