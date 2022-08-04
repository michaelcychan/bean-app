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
  TextInput
} from 'react-native';
import {styles} from './stylesheets';

export const LoginScreen = ({navigation}) => {

  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);

  return (
    <>
      <Text>Coffee Bean's Login Page</Text>
      <SafeAreaView>
      <TextInput
          style={styles.input}
          onChangeText={onChangeShopEmail}
          value={shopEmail}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeShopPassword}
          value={shopPassword}
          placeholder="Enter your password"
          keyboardType="default"
          secureTextEntry={true}
        />
      </SafeAreaView>
      <Button
        title="Go to Shop page"
        onPress={() =>
          navigation.navigate('Coffee Shop Name', {name: 'ShowPage'})
        }
      />
    </>
  );
};