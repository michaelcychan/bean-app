import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/homeScreen';
import {EmailAndPasswordScreen} from './components/signUpFlow/emailAndPasswordScreen';
import {ShopNameScreen} from './components/signUpFlow/shopNameScreen';
import {ShopLogoScreen} from './components/signUpFlow/shopLogoScreen';
import {ShopWebsiteScreen} from './components/signUpFlow/shopWebsiteScreen';
import {OpeningHoursScreen} from './components/signUpFlow/openingHoursScreen';
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
        options={{title: 'Email and Password'}}
      />
      <SignUpStack.Screen
        name="Name"
        component={ShopNameScreen}
        options={{title: 'Shop Name'}}
      />
      <SignUpStack.Screen
        name="Logo"
        component={ShopLogoScreen}
        options={{title: 'Shop Logo'}}
      />
      <SignUpStack.Screen
        name="Website"
        component={ShopWebsiteScreen}
        options={{title: 'Shop Website'}}
      />
      <SignUpStack.Screen
        name="Opening Hours"
        component={OpeningHoursScreen}
        options={{title: 'Opening Hours'}}
      />
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
