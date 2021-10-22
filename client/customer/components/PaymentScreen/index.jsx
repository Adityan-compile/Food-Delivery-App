import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import React, {useContext, useEffect, useState} from 'react';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import PaymentsContext from '../../store/contexts/paymentsContext';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStripe} from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const {goBack} = useNavigation();

  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');

  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
    return () => {
      AndroidKeyboardAdjust.setAdjustResize();
    };
  }, []);

  const {getPaymentIntent} = useContext(PaymentsContext);

  const openPaymentSheet = () => {
    console.log(name, address, phone, zip);
    if (!name) {
      return Alert.alert(
        'Warning',
        'Fill out All Fields to Proceed to Checkout',
      );
    }
    if (!address) {
      return Alert.alert(
        'Warning',
        'Fill out All Fields to Proceed to Checkout',
      );
    }
    if (!phone) {
      return Alert.alert(
        'Warning',
        'Fill out All Fields to Proceed to Checkout',
      );
    }
    if (!zip) {
      return Alert.alert(
        'Warning',
        'Fill out All Fields to Proceed to Checkout',
      );
    }

    getPaymentIntent()
      .then(async res => {
        const {error} = await initPaymentSheet({
          paymentIntentClientSecret: res.clientSecret,
        });

        if (error) {
          Alert.alert('Error', 'Cannot Load Payment Gateway');
          goBack(null);
          return;
        }

        const {error: err} = await presentPaymentSheet({
          clientSecret: res.clientSecret,
        });

        if (err) {
          Alert.alert('', 'Payment Failed');
          navig;
        } else {
          Alert.alert(
            'Order Placed',
            'Dear, Customer your order is Placed, Please Check your Order Status from your Accounts Tab',
          );
        }
      })
      .catch(e => Alert.alert('Error', 'Cannot Load Payment Gateway'));
  };

  return (
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
          autoComplete="name"
          value={name}
          onChangeText={text => setName(text)}></TextInput>
        <Text style={styles.label}>Delivery Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Nulla St.Mankato ..."
          autoComplete="postal-address"
          multiline
          value={address}
          onChangeText={text => setAddress(text)}></TextInput>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoComplete="tel"
          keyboardType="phone-pad"
          maxLength={15}
          value={phone}
          onChangeText={text => setPhone(text)}></TextInput>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          autoComplete="postal-code"
          keyboardType="numeric"
          value={zip}
          onChangeText={text => {
            setZip(text);
          }}></TextInput>
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
            }
            onPress={() => openPaymentSheet()}></Button>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PaymentScreen;
