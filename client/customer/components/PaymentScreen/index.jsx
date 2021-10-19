import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Icon} from 'react-native-elements';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PaymentScreen = () => {
  const {goBack} = useNavigation();

  const {confirmPayment, handleCardAction} = useStripe();
  const [card, setCard] = useState(CardFieldInput.Details | null);
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
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: 'white',
          color: 'black',
        }}
        onCardChange={cardDetails => {
          setCard(cardDetails);
        }}
        style={styles.card}></CardField>
    </View>
  );
};

export default PaymentScreen;
