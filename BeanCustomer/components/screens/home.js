import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Home = ({navigation}) => {
  const getBeanHome = () => {
    return fetch('http://localhost:5050/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => getBeanHome()}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Text>Receive free coffee</Text>
      <Text>From your favourite independant coffee shop</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text>Sign up for rewards</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign In')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
