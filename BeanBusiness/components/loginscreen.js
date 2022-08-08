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
  const [returnedObject, setReturnedObject] = React.useState();

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

  // sending request to backend server attempting to log in
  const baristaLogIn = () => {
    fetch('http://localhost:5050/barista/log-in', baristaLogInData)
      .then(response => response.json())
      .then(json => {
        console.log(json.email);
        setReturnedObject(json);
        return json;
      })
      .then(data => {
        console.log(`data : ${data}`);
        console.log(`returnedObject : ${returnedObject.email}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

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
        onPress={() => {
          baristaLogIn();
          console.log(returnedObject);
          navigation.navigate('Coffee Shop Name', {
            name: 'ShowPage',
          });
        }}
      />
    </>
  );
};
