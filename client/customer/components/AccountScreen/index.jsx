import {Alert, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import AuthContext from '../../store/contexts/authContext';
import {Avatar} from 'react-native-elements';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const [user, setUser] = useState({name: ''});
  const {getAuthState} = useContext(AuthContext);
  const {navigate} = useNavigation();
  var colors = [
    'orange',
    'tomato',
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
        setUser(res.user);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(
          'Error',
          'Error Loading User, Try again later or reinstall app and try again !',
        );
        setTimeout(navigate('Home'), 1000);
      });
  }, []);
  return (
    <View style={global.container}>
      <View style={styles.infoContainer}>
        <View style={styles.account}>
          <Avatar
            rounded
            size={100}
            title={user.name[0]}
            containerStyle={[
              {
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              },
              styles.image,
            ]}></Avatar>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 10,
              marginTop: 20,
            }}>
            <Text style={styles.infoText}>{user.name}</Text>
            <Text style={styles.infoText}>{user.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
