import * as React from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {styles} from '../stylesheet';

export const SignIn = ({navigation, route}) => {
  // variables created to take the text input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // variable created to take email returned from fetch request
  const [userEmail, setUserEmail] = React.useState('default email');

  // object to be passed into fetch request
  let data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const signIn = () => {
    return fetch('http://localhost:5050/drinker/log-in', data)
      .then(response => response.json())
      .then(json => {
        // set the user email variable to the returned value
        // note: this isn't happening before navigation occurs
        setUserEmail(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        autoCapitalize='none' // set to stop capitalization of first letter
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        textContentType='username' // defined to allow autofill on iPhone
      />
      <TextInput
        autoCapitalize='none' // set to stop capitalization of first letter
        secureTextEntry={true} // hides text input on screen
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        textContentType='password' // defined to allow autofill on iPhone
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // attempting to work with asynchronous fetch function to navigate after value returned, but not working
          signIn().then(response => {
            console.log(userEmail);
            navigation.navigate('BeanApp', {
              screen: 'Id',
              params: {email: userEmail}
            });
          });
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>Haven't signed up yet?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
