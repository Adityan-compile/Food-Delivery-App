import {Button, Icon, PricingCard} from 'react-native-elements';

import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';
import styles from './styles';

const PriceCard = ({data}) => {
  return (
    <View>
      <PricingCard
        containerStyle={styles.priceCard}
        color="black"
        title="Total"
        price={'\u20B9 100'}
        info={['Delivery: \u20B920', 'Tax & Fees: \u20B910']}
        button={
          <Button
            title="Checkout"
            containerStyle={{
              margin: 5,
            }}
          />
        }></PricingCard>
    </View>
  );
};

export default PriceCard;
