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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

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
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signIn();
          navigation.navigate('BeanApp', {
            screen: 'Beans',
            params: { email: userEmail}
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
