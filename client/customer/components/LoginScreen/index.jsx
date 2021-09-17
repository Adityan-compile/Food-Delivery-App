import React,{ useState } from 'react';
import styles from './styles.js';
import Logo from '../../assets/logo.png';
import {
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput,
    Text
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

const LoginScreen = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}></Image>
      <KeyboardAvoidingView>
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
        <Text style={styles.link}>Don't Have an Account? Signup</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
