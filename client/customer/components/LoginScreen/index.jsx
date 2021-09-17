import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import Logo from '../../assets/logo.png';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <Image source={Logo} style={styles.logo}></Image>
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
          <Button title="Login" buttonStyle={styles.button}></Button>
          <Text style={styles.link} onPress={() => navigate('Signup')}>
            Don't Have an Account? Signup
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;