import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import Header from '../../components/Header';
import Trending from '../../components/Trending';

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
      <Trending />
    </View>
  );
};

export default Home;
