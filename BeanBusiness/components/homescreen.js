import React from 'react';
import type {Node} from 'react';
import {
  Button,
  Pressable,
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
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Signup', {name: 'SignupNow'})}
      ><Text style={styles.buttontext}>Start building your customer base</Text>
      </Pressable>
      <Text>Already have an account?</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      ><Text style={styles.buttontext}>Go to the login page</Text>
      </Pressable>
    </View>
  );
};