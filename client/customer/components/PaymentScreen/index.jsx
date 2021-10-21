import {Button, Icon} from 'react-native-elements';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStripe} from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const {goBack} = useNavigation();

  const {confirmPayment, handleCardAction} = useStripe();

  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
    return () => {
      AndroidKeyboardAdjust.setAdjustResize();
    };
  }, []);

  // return (
  // <ScrollView style={{flex: 1}}>
  // <KeyboardAvoidingView style={{flex: 1, flexGrow: 1}}>
  //   <Icon
  //     type="ionicon"
  //     name="arrow-back-circle-outline"
  //     color="black"
  //     size={40}
  //     containerStyle={styles.backIcon}
  //     onPress={() => goBack(null)}></Icon>
  //   <View
  //     style={{
  //       marginHorizontal: 20,
  //     }}>
  //     <Text style={styles.label}>Name</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="John Doe"
  //       autoComplete="name"></TextInput>
  //     <Text style={styles.label}>Delivery Address</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Nulla St.Mankato ..."
  //       autoComplete="postal-address"></TextInput>
  //     <Text style={styles.label}>Phone</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Phone Number"
  //       autoComplete="tel"></TextInput>
  //     <Text style={styles.label}>Zip Code</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Postal Code"
  //       autoComplete="postal-code"></TextInput>
  //     <TouchableWithoutFeedback>
  //       <Button
  //         containerStyle={styles.checkoutButton}
  //         title="Proceed to Pay"
  //         icon={
  //           <Icon
  //             type="ionicon"
  //             name="caret-forward-circle-outline"
  //             color="white"
  //             containerStyle={{marginRight: 5}}></Icon>
  //         }></Button>
  //     </TouchableWithoutFeedback>
  //   </View>
  // </KeyboardAvoidingView>
  // </ScrollView>
  // );
  return (
    // <ScrollView>
    //   <KeyboardAvoidingView>
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <View style={[global.container]}>
        <Icon
          type="ionicon"
          name="arrow-back-circle-outline"
          color="black"
          size={40}
          containerStyle={styles.backIcon}
          onPress={() => goBack(null)}></Icon>
      </View>
      <View
        style={[
          global.container,
          {
            marginHorizontal: 20,
          },
        ]}>
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
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoComplete="tel"></TextInput>
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
      </View>
    </KeyboardAwareScrollView>
    //   </KeyboardAvoidingView>
    // </ScrollView>
  );
};

export default PaymentScreen;
