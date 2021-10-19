import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AuthContext from '../store/contexts/authContext';
import AuthProvider from '../store/providers/AuthProvider';
import CartContext from '../store/contexts/cartContext';
import CartProvider from '../store/providers/CartProvider';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import Payment from '../screens/Payment';
import PaymentsContext from '../store/contexts/paymentsContext';
import PaymentsProvider from '../store/providers/PaymentsProvider';
import RestaurantContext from '../store/contexts/restaurantContext';
import RestaurantProvider from '../store/providers/RestaurantProvider';
import Signup from '../screens/Signup';
import Tabs from './Tabs';
import {createStackNavigator} from '@react-navigation/stack';
import emitter from '../store/services/emitter';

const Routes = () => {
  const Stack = createStackNavigator();
  const [user, setUser] = useState('');

  useEffect(() => {
    AuthProvider.getAuthState()
      .then(res => {
        setUser(res);
      })
      .catch(e => setUser({authenticated: false}));
  }, []);

  emitter.on('logout', () => {
    setUser({
      authenticated: false,
    });
  });

  emitter.on('login', user => {
    setUser({
      ...user,
      authenticated: true,
    });
  });

  const renderGroup = () => {
    if (user.authenticated === true) {
      return (
        <Stack.Group>
          <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
          <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
        </Stack.Group>
      );
    } else {
      return (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Group>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <AuthContext.Provider value={AuthProvider}>
        <RestaurantContext.Provider value={RestaurantProvider}>
          <CartContext.Provider value={CartProvider}>
            <PaymentsContext.Provider value={PaymentsProvider}>
              {/* <StripeProvider publishableKey={publishableKey}> */}
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}>
                  {renderGroup()}
                </Stack.Navigator>
              </NavigationContainer>
              {/* </StripeProvider> */}
            </PaymentsContext.Provider>
          </CartContext.Provider>
        </RestaurantContext.Provider>
      </AuthContext.Provider>
    </View>
  );
};

export default Routes;
