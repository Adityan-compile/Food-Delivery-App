import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import Header from '../../components/Header';

const Home = () => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustNothing();
    return () => {
      AndroidKeyboardAdjust.setAdjustResize();
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header />
    </View>
  );
};

export default Home;
