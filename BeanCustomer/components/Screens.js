import * as React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FirstName, LastName, Email, Password } from './TextInputs'

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Receive free coffee</Text>
      <Text>From your favourite independant coffee shop</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('Sign Up')
      }
      >
      <Text>Sign up for rewards</Text>
    </TouchableOpacity>
    <Text>Already have an account?</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('Sign In')
      }
    >
      <Text>Login</Text>
    </TouchableOpacity>
    </View>
  );
};

export const SignUp = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      {/* using components from TextInputs */}
      <FirstName/>
      <LastName/>
      <Email/>
      <Password/>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => 
            navigation.navigate('BeanApp')
          }
        >
          <Text>Sign up</Text>
        </TouchableOpacity>
      <View>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => 
            navigation.navigate('Sign In')
          }
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

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

export const Id = ({ navigation, route}) => {
  return (
    <View style={styles.container}>
    <Text>Member Number</Text>
      <Text>0000-0001</Text>
    </View>
  )
}

export const Beans = ({ navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text>Beans Collected</Text>
      <View>
        <Text>0</Text>
      </View>
    </SafeAreaView>
  )
}

export const Settings = ({ navigation, route}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
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
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})