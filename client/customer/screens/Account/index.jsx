import AccountScreen from '../../components/AccountScreen';
import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';
const Account = () => {
  return (
    <View style={global.container}>
      <AccountScreen />
    </View>
  );
};

export default Account;
