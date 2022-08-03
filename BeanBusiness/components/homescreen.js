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

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <Text>Coffee Bean's Homepage</Text>
      <Button
        title="Go to the signup page"
        onPress={() => navigation.navigate('Signup', {name: 'SignupNow'})}
      />
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      />
    </>
  );
};