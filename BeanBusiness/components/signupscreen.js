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
  TextInput,
} from 'react-native';

export const SignupScreen = ({navigation}) => {
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  return (
    <>
      <Text>Coffee Bean's Signup Page</Text>
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
        title="Go to the login page"
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
