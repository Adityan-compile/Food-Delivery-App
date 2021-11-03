import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import React, {useContext, useEffect, useState} from 'react';

import AuthContext from '../../store/contexts/authContext';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const [user, setUser] = useState({name: ''});
  const {getAuthState} = useContext(AuthContext);
  const {navigate} = useNavigation();

  var colors = [
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
        console.error(e);
        Alert.alert('Error', 'Error Loading User, Try again later!');
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
      <View style={[global.container, styles.body]}>
        <Button
          title="Edit Account"
          raised
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.edit}></Button>
        <Button
          title="Delete Account"
          raised
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.delete}></Button>
        <View style={[global.container, styles.listContainer]}>
          <TouchableOpacity>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Addresses</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Orders')}>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Orders</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Paytments</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Favourites</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
