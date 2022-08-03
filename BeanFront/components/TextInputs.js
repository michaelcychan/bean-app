import * as React from 'react';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

export const FirstName = (props) => {
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

export const LastName = (props) => {
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

export const Email = (props) => {
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

export const Password = (props) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})