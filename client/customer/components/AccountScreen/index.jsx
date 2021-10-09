import {Alert, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import AuthContext from '../../store/contexts/authContext';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const [user, setUser] = useState({name: ''});
  const {getAuthState} = useContext(AuthContext);
  const {navigate} = useNavigation();
  var colors = [
    'tomato',
    'orange',
    '#02b085',
    '#0072c6',
    '#ad2a1a',
    '#co2f1d',
    '#3c6478',
    '#107896',
  ];

  useEffect(() => {
    getAuthState()
      .then(res => {
        setUser(res.user.user);
      })
      .catch(e => {
        Alert.alert(
          'Error',
          'Error Loading User, Try again later or reinstall app and try again !',
        );
        setTimeout(navigate('Home'), 1000);
      });
  }, []);
  return (
    <View>
      <Avatar
        rounded
        size={100}
        title={user.name[0]}
        containerStyle={[
          {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          },
          styles.image,
        ]}></Avatar>
    </View>
  );
};

export default AccountScreen;
