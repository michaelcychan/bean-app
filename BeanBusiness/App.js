import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './components/homescreen';
import {SignupScreen} from './components/signupscreen';
import {LoginScreen} from './components/loginscreen';
import {EnterID} from './components/enterID';
import {CustomerProfileScreen} from './components/customerprofile';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home of Beans'}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{title: 'Signup'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Coffee Shop Name"
          component={EnterID}
          options={{title: 'Shop - Enter membership id'}}
        />
        <Stack.Screen
          name="Customer Profile Screen"
          component={CustomerProfileScreen}
          options={{title: 'Customer Name Profile Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
