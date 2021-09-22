import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';

import AuthContext from '../../store/contexts/authContext';
import {Button} from 'react-native-elements';
import Logo from '../../assets/logo.png';
import global from '../styles/global';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signup} = useContext(AuthContext);

  const {navigate} = useNavigation();

  const handleSubmit = () => {
    signup({
      name: name,
      email: email,
      password: password,
    })
      .then(res => {
        navigate('Tabs', {
          screen: 'Home',
        });
      })
      .catch(err => {
        setError('Error Registering User Try Again Later');
        console.error(err);
      });
  };

  const renderError = () => {
    if (error) {
      return <Text style={[global.error, global.textCenter]}>{error}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <Image source={Logo} style={styles.logo}></Image>
          {renderError()}
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}></TextInput>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={global.input}></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={global.input}></TextInput>
          <Button title="Join Us" buttonStyle={global.button}></Button>
          <TouchableOpacity>
            <Text style={global.link} onPress={() => navigate('Login')}>
              Have an Account? Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
