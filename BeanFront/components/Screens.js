import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { FirstName, LastName, Email, Password } from './TextInputs'

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Receive free coffee</Text>
      <Text>From your favourite independant coffee shop</Text>
    <Button
      style={styles.button}
      title="Sign up for rewards"
      onPress={() =>
        navigation.navigate('Sign Up')
      }
    />
    <Text>Already have an account?</Text>
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Sign In')
      }
    />
    </View>
  );
};

export const SignUp = ({ navigation, route }) => {

  return (
    <View>
      <Text>Signup</Text>
      {/* using components from TextInputs */}
      <FirstName/>
      <LastName/>
      <Email/>
      <Password/>
      <Button title="Signup" />
      <View>
        <Text>Already have an account?</Text>
        <Button 
          title="Login" 
          onPress={() => 
            navigation.navigate('Sign In')
          }
        />
      </View>
    </View>
  )
};

export const SignIn = ({ navigation, route }) => {
  return (
    <View>
      <Text>Login</Text>
      {/* using components from TextInputs */}
      <Email/>
      <Password/>
      <Button 
            title="Login" 
            onPress={() => 
              navigation.navigate('Id')
            }
          />
      <View>
        <Text>Haven't signed up yet?</Text>
        <Button
          title="Sign up"
          onPress={() =>
            navigation.navigate('Sign Up')
          }
        />
      </View>
    </View>
  )
}

export const Id = ({ navigation, route}) => {
  return (
    <View>
    <Text>Member Number</Text>
      <View>
      <Text>0000-0001</Text>
      </View>
      <View>
      <Button
        title="Beans"
        onPress={() =>
          navigation.navigate('Beans')
        }
      />
      </View>
    <Button
        title="Settings"
        onPress={() =>
          navigation.navigate('Settings')
        }
    />
    </View>
  )
}

export const Beans = ({ navigation, route}) => {
  return (
    <View>
    <Text>Beans Collected</Text>
      <View>
        <Text>0</Text>
      </View>
    </View>
  )
}

export const Settings = ({ navigation, route}) => {
  return (
    <Button 
      title="Logout"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
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