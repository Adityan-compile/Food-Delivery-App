import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {Button} from 'react-native-elements';
import Logo from '../../assets/logo.png';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <Image source={Logo} style={styles.logo}></Image>
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
            style={styles.input}></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}></TextInput>
          <Button title="Join Us" buttonStyle={styles.button}></Button>
          <Text style={styles.link} onPress={() => navigate('Login')}>
            Have an Account? Login
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
