import React, {useState} from 'react';
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
import {backendDomain} from '../backendDomain';

export const SignIn = ({navigation, route}) => {
  // variables created to take the text input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // variable created to take drinker ID returned from fetch request
  const [user, setUser] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    if (user.drinker_id > 0) {
      navigation.navigate('BeanApp', {user: user});
    }
  };

  //
  const handleSubmit = () => {
    var emailValid = false;
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    if (email.length == 0) {
      setEmailError('Email is required');
    } else if (email.length < 6) {
      setEmailError('Email should be minimum 6 characters');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    } else if (pattern.test(email) === false) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    } else {
      setPasswordError('');
      passwordValid = true;
    }

    if (emailValid && passwordValid) {
      signIn();
    }
  };

  //

  // fetch request checking email and password against database. Returning drinker id if details valid.
  const signIn = () => {
    return fetch(`${backendDomain}drinker/log-in`, data)
      .then(response => response.json())
      .then(responseData => {
        return responseData;
      })
      .then(data => {
        setUser(data);
        return data;
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
          source={require('../images/BeanLogoWhite.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>Login</Text>
      <TextInput
        autoCapitalize="none" // set to stop capitalization of first letter
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="#999999"
        textContentType="username" // defined to allow autofill on iPhone
      />
      {emailError.length > 0 && <Text>{emailError}</Text>}
      <TextInput
        autoCapitalize="none" // set to stop capitalization of first letter
        secureTextEntry={true} // hides text input on screen
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="#999999"
        textContentType="password" // defined to allow autofill on iPhone
      />
      {passwordError.length > 0 && <Text>{passwordError}</Text>}
      <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{color: 'white', fontWeight: 'bold', marginTop: 30}}>
        Haven't signed up yet?
      </Text>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.secondaryButtonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
