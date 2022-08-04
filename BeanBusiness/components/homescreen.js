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

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loyal Bean</Text>
      <Text style={styles.subtitle}>Form relationships</Text>
      <Text>with loyal coffee drinkers</Text>
      <Button
        title="Start building your customer base"
        onPress={() => navigation.navigate('Signup', {name: 'SignupNow'})}
      />
      <Text>Already have an account?</Text>
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      />
    </View>
  );
};