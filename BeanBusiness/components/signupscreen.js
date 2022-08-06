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
import {styles} from './stylesheets';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

export const SignupScreen = ({navigation}) => {
  const [shopName, onChangeShopName] = React.useState(null);
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  const [shopAddress, onChangeShopAddress] = React.useState(null);

  // creating an object of data to pass into baristaSignUp fetch request
  let newBaristaData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shop_name: shopName,
      email: shopEmail,
      password: shopPassword,
      shop_address: shopAddress,
    }),
  };

  // sending request to backend server to signup a new barista
  const baristaSignUp = () => {
    return fetch('http://localhost:5050/barista/new-barista', newBaristaData)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Text>Coffee Bean's Signup Page</Text>
      <ScrollView>
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

          <TextInput
            style={styles.input}
            onChangeText={onChangeShopAddress}
            value={shopAddress}
            placeholder="Enter your shop Address"
            keyboardType="default"
          />

          {/* GooglePlacesAutocomplete can show a field, but we should think of a way to save the address text */}
          {/* <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 1,
              },
              textInputContainer: {
                backgroundColor: 'white',
              },
              textInput: {
                height: 38,
                fonSize: 16,
              },
              padding: 10,
            }}
            placeholder="Enter Shop Address"
            minLength={2} // minimum length of text to search
            autoFocus={true}
            returnKeyType={'search'} // Can be left out for default return key
            listViewDisplayed={false} // true/false/undefined
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              this.props.notifyChange(details.geometry.location);
            }}
            query={{
              key: Config.GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
          /> */}
        </SafeAreaView>

        <Button
          title="Sign up"
          onPress={() => {
            baristaSignUp();
            navigation.navigate('Login', {name: 'LoginNow'});
          }}
        />
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
