import * as React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {styles} from '../stylesheet';

export const SignUp = ({navigation, route}) => {
  // creating variables using state that we can change when database data has been received. Defaulting to an empty string
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  const signUp = () => {
    return fetch('http://localhost:5050/drinker/new-drinker', data)
      .then(response => response.json())
      .then(json => {
        // console log used to deal with response data as will not be displayed on page
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Home')
        }
      >
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
        autoCapitalize='none' // turns off capitalization of first letter
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        autoCapitalize='none' // turns off capitalization of first letter
        secureTextEntry={true} // hides password on screen
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        // pressing the button calls the sign up function, and navigates to the Sign In page.
        // an alternative path needs to be written where the user can not sign up with the details provided, currently it crashes the server
        onPress={
          () => { signUp(); navigation.navigate('Sign In')}
          }>
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
