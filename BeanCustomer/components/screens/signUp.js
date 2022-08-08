import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../stylesheet';

export const SignUp = ({navigation, route}) => {
  // create an error message variable to communicate to a user why they couldn't sign up
  const [signUpError, setSignUpError] = useState('');

  // creating variables using state that we can change when database data has been received. Defaulting to an empty string
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // error handling for emails
  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError('Email is required');
    } else if (email.length < 6) {
      setEmailError('Email should be minimum 6 characters');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
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
      signUp();
    }
  };

  // creating an object of data to pass into the signUp fetch request
  let data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    }),
  };

  // navigation function with If function to only allow navigation if a user is successfully added
  const userCreated = response => {
    if (response == 'User added') {
      navigation.navigate('Sign In');
    } else {
      setSignUpError('Unable to create user');
    }
  };

  const signUp = () => {
    return fetch('http://localhost:5050/drinker/new-drinker', data)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        return responseData;
      })
      .then(data => userCreated(data))
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
      <Text>Signup</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        autoCapitalize="none" // turns off capitalization of first letter
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      {emailError.length > 0 && <Text>{emailError}</Text>}
      <TextInput
        autoCapitalize="none" // turns off capitalization of first letter
        secureTextEntry={true} // hides password on screen
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      {passwordError.length > 0 && <Text>{passwordError}</Text>}
      <Text>{signUpError}</Text>
      <TouchableOpacity
        style={styles.button}
        // pressing the button calls the sign up function, and navigates to the Sign In page.
        // an alternative path needs to be written where the user can not sign up with the details provided, currently it crashes the server
        onPress={handleSubmit}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <View>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sign In')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};