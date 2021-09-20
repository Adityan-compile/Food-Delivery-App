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
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import Logo from '../../assets/logo.png';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {navigate} = useNavigation();

  const {login} = useContext(AuthContext);

  const handleSubmit = () => {
    login({
      email: email,
      password: password,
    })
      .then(res => {
        navigate('Tabs', {
          screen: 'Home',
        });
      })
      .catch(err => {
        setError('Error Logging In check your Credentials!');
        console.error(err);
      });
  };

  const renderError = () => {
    if (error) {
      return <Text style={[styles.error, styles.textCenter]}>{error}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <Image source={Logo} style={styles.logo}></Image>

          <View>{renderError()}</View>

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
          <Button
            title="Login"
            buttonStyle={styles.button}
            onPress={handleSubmit}></Button>
          <TouchableOpacity>
            <Text style={styles.link} onPress={() => navigate('Signup')}>
              Don't Have an Account? Signup
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
