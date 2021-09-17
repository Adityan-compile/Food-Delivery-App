import React, {useEffect} from 'react';

import LoginScreen from '../../components/LoginScreen/index.jsx';
import {View} from 'react-native';

export default function Login({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <LoginScreen></LoginScreen>
    </View>
  );
}
