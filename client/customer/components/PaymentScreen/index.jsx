import {Button, Icon} from 'react-native-elements';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStripe} from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const {goBack} = useNavigation();

  const {confirmPayment, handleCardAction} = useStripe();
  return (
    <View style={global.container}>
      <TouchableOpacity onPress={() => goBack(null)}>
        <Icon
          type="ionicon"
          name="arrow-back-circle-outline"
          color="black"
          size={40}
          containerStyle={styles.backIcon}></Icon>
      </TouchableOpacity>
      <ScrollView style={{marginHorizontal: 20}}>
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            autoComplete="name"></TextInput>
          <Text style={styles.label}>Delivery Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Nulla St.Mankato ..."
            autoComplete="postal-address"></TextInput>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            autoComplete="tel"></TextInput>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            autoComplete="postal-code"></TextInput>
          <TouchableWithoutFeedback>
            <Button
              containerStyle={styles.checkoutButton}
              title="Proceed to Pay"
              icon={
                <Icon
                  type="ionicon"
                  name="caret-forward-circle-outline"
                  color="white"
                  containerStyle={{marginRight: 5}}></Icon>
              }></Button>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
