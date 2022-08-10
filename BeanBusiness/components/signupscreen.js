import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './stylesheets';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import {backendDomain} from './backendDomain';

export const SignupScreen = ({navigation}) => {
  const [shopName, onChangeShopName] = React.useState(null);
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  const [shopLogo, onChangeShopLogo] = React.useState(null);

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
      shopLogo: shopLogo,
    }),
  };

  const logIn = response => {
    if (response == 'A new Barista joined!') {
      navigation.navigate('Login');
    }
  };

  // sending request to backend server to signup a new barista
  const baristaSignUp = () => {
    return fetch(`${backendDomain}barista/new-barista`, newBaristaData)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => logIn(data))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('./images/CoffeeMug.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text>Coffee Bean's Signup Page</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopName}
        value={shopName}
        placeholder="Enter your shop's name"
        keyboardType="default"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopEmail}
        value={shopEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopPassword}
        value={shopPassword}
        placeholder="Enter your password"
        keyboardType="default"
        secureTextEntry={true}
      />

      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopLogo}
        value={shopLogo}
        placeholder="Enter your shop logo url"
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          baristaSignUp();
        }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
