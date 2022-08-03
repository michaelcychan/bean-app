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

export const EnterID = ({navigation}) => {
  return (
    <>
      <Text>Enter membership ID:</Text>
      <Button
        title="Search User"
        onPress={() =>
          navigation.navigate('Customer Profile Screen', {
            name: 'Customer Name Profile Page',
          })
        }
      />
    </>
  );
};