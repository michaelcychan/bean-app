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

export const LoginScreen = ({navigation}) => {
  return (
    <>
      <Text>Coffee Bean's Login Page</Text>
      <Button
        title="Go to Shop page"
        onPress={() =>
          navigation.navigate('Coffee Shop Name', {name: 'ShowPage'})
        }
      />
    </>
  );
};