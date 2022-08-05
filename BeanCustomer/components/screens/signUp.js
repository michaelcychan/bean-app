import * as React from 'react';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../stylesheet';

const FirstName = (props) => {
  const [text, onChangeText] =
  React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="First Name"
      />
    </SafeAreaView>
  )
}

const LastName = (props) => {
  const [text, onChangeText] =
  React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Last Name"
      />
    </SafeAreaView>
  )
}

const Email = (props) => {
  const [text, onChangeText] =
  React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
    </SafeAreaView>
  )
}

const Password = (props) => {
  const [text, onChangeText] =
  React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Password"
      />
    </SafeAreaView>
  )
}

export const SignUp = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      {/* using components from TextInputs */}
      <FirstName />
      <LastName />
      <Email />
      <Password />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BeanApp')}>
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
