import * as React from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import {styles} from '../stylesheet';

export const SignIn = ({navigation, route}) => {
  // variables created to take the text input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // variable created to take drinker ID returned from fetch request
  const [userId, setUserId] = React.useState('0');

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

  // navigation function with If function to only allow navigation if a member number is returned
  const enterBeanApp = user => {
    if (user > 0) {
      navigation.navigate('BeanApp', {user: user});
    }
  };

  // fetch request checking email and password against database. Returning drinker id if details valid.
  const signIn = () => {
    return fetch('http://localhost:5050/drinker/log-in', data)
      .then(response => response.json())
      .then(responseData => {
        return responseData;
      })
      .then(data => {
        console.log(data.drinker_id)
        setUserId(data.drinker_id);
        return data.drinker_id;
      })
      .then(user => enterBeanApp(user))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../images/CoffeeMug.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text>Login</Text>
      <TextInput
        autoCapitalize="none" // set to stop capitalization of first letter
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        textContentType="username" // defined to allow autofill on iPhone
      />
      <TextInput
        autoCapitalize="none" // set to stop capitalization of first letter
        secureTextEntry={true} // hides text input on screen
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        textContentType="password" // defined to allow autofill on iPhone
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signIn();
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
