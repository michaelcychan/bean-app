import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/homeScreen';
import {SignupScreen} from './components/signupScreen';
import {LoginScreen} from './components/loginScreen';
import {ShopHome} from './components/shopHome';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee Shop Home" component={ShopHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
