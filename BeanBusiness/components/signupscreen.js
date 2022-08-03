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

export const SignupScreen = ({navigation}) => {
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