import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './components/homescreen';
import {SignupScreen} from './components/signupscreen';
import {LoginScreen} from './components/loginscreen';
import {EnterID} from './components/enterID';
import {CustomerProfileScreen} from './components/customerprofile';

import {AuthProvider} from './providers/AuthProvider';

import {styles} from './components/stylesheets';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default MyStack;
