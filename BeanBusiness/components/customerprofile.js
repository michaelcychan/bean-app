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
import {styles} from './stylesheets';

export const CustomerProfileScreen = ({navigation}) => {
  return (
    <>
      <Text>Customer's Name Profile Page</Text>
      <Button title="Add a bean" />
      <Button title="Redeem a drink" />
    </>
  );
};