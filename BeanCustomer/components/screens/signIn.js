import * as React from 'react';
import {View, Button, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import {styles} from '../stylesheet'

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

export const SignIn = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {/* using components from TextInputs */}
      <Email/>
      <Password/>
      <TouchableOpacity
          style={styles.button} 
          onPress={() => 
            navigation.navigate('BeanApp')
          }
        >
      <Text>Login</Text>
      </TouchableOpacity>
        <Text>Haven't signed up yet?</Text>
        <TouchableOpacity
          style={styles.button} 
          onPress={() =>
            navigation.navigate('Sign Up')
          }
        >
          <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}