import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export const SignupScreen = ({navigation}) => {
  const [shopName, onChangeShopName] = React.useState(null);
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  const [shopAddress, onChangeShopAddress] = React.useState(null);

  return (
    <>
      <Text>Coffee Bean's Signup Page</Text>
      <SafeAreaView>
      <TextInput
          style={styles.input}
          onChangeText={onChangeShopName}
          value={shopName}
          placeholder="Enter your shop's name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeShopEmail}
          value={shopEmail}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeShopPassword}
          value={shopPassword}
          placeholder="Enter your password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <GooglePlacesAutocomplete
          // eslint-disable-next-line react-native/no-inline-styles
          styles={{
            container: {
              flex: 1,
            },
            textInputContainer: {
              backgroundColor: 'grey',
            },
            textInput: {
              height: 38,
              fonSize: 16,
            },
            padding: 10,
          }}
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(data, details);
            onChangeShopAddress(data) // is it the correct syntax??
          }}
          query={{
            key: 'AIzaSyAAKl1eg50hAFGZrU2wIGwXeqRo-YlJJEY',
            language: 'en',
          }}
        />
      </SafeAreaView>
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
