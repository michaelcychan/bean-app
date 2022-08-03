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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Text>Coffee Bean's Homepage</Text>
      <Button
        title="Go to the signup page"
        onPress={() => navigation.navigate('Signup', {name: 'SignupNow'})}
      />
    </>
  );
};
const SignupScreen = ({navigation}) => {
  return (
    <>
      <Text>Coffee Bean's Signup Page</Text>
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      />
    </>
  );
};
const LoginScreen = ({navigation}) => {
  return (
    <>
      <Text>Coffee Bean's Login Page</Text>
    </>
  );
};

export default MyStack;
