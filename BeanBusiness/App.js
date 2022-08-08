import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/homescreen';
import {SignupScreen} from './components/signupscreen';
import {LoginScreen} from './components/loginscreen';
import {ShopHome} from './components/shopHome';
import {CustomerProfileScreen} from './components/customerprofile';
import {styles} from './components/stylesheets';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee Shop Home" component={ShopHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
