import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/homeScreen';
import {EmailAndPasswordScreen} from './components/signUpFlow/emailAndPasswordScreen';
import {NameAndLogoScreen} from './components/signUpFlow/nameAndLogoScreen';
import {ShopDetailsScreen} from './components/signUpFlow/shopDetailsScreen';
import {LoginScreen} from './components/loginScreen';
import {ShopHome} from './components/shopHome';

const Stack = createNativeStackNavigator();
const SignUpStack = createNativeStackNavigator();

const SignUp = ({route, props}) => {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        name="Email/Password"
        component={EmailAndPasswordScreen}
      />
      <SignUpStack.Screen name="Name/Logo" component={NameAndLogoScreen} />
      <SignUpStack.Screen name="Shop Details" component={ShopDetailsScreen} />
    </SignUpStack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignupFlow" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee Shop Home" component={ShopHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
