import {ActivityIndicator, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import Context from '../../store/contexts';
import PaymentScreen from '../../components/PaymentScreen';
import {StripeProvider} from '@stripe/stripe-react-native';
import global from '../../styles/global';

const Payment = () => {
  const {getPublishableKey} = useContext(Context);
  const [publishableKey, setPublishableKey] = useState('');
  useEffect(() => {
    getPublishableKey()
      .then(res => {
        setPublishableKey(res);
      })
      .catch(e => {
        Alert.alert('Error', 'Cannot Load Payment Gateway');
      });
  }, []);
  return (
    <View style={global.container}>
      {publishableKey ? (
        <StripeProvider publishableKey={publishableKey}>
          <PaymentScreen />
        </StripeProvider>
      ) : (
        <ActivityIndicator
          size="large"
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            margin: 20,
          }}></ActivityIndicator>
      )}
    </View>
  );
};

export default Payment;
