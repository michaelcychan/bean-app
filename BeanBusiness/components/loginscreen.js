import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './stylesheets';

export const LoginScreen = ({navigation}) => {
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  const [userEmail, setUserEmail] = React.useState();

  // creating an object of data to pass into login fetch request
  let baristaLogInData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: shopEmail,
      password: shopPassword,
    }),
  };

  const logIn = user => {
    if (user !== undefined) {
      navigation.navigate('Coffee Shop Home', {shopId: {user}});
    }
  };

  // sending request to backend server attempting to log in
  const baristaLogIn = () => {
    fetch('http://localhost:5050/barista/log-in', baristaLogInData)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => {
        logIn(data.shopId);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('./images/CoffeeMug.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text>Coffee Bean's Login Page</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopEmail}
        value={shopEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopPassword}
        value={shopPassword}
        placeholder="Enter your password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          baristaLogIn();
        }}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
