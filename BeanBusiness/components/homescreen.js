import React from 'react';
import {Pressable, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './stylesheets';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/CoffeeMug.png')}
        style={styles.homeImage}
      />
      <Text style={styles.title}>Loyal Bean</Text>
      <Text style={styles.subtitle}>Form relationships</Text>
      <Text>with loyal coffee drinkers</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup', {name: 'SignupNow'})}>
        <Text>Start building your customer base</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}>
        <Text>Go to the login page</Text>
      </TouchableOpacity>
    </View>
  );
};
