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
import Config from 'react-native-config';

export const SignupScreen = ({navigation}) => {
  const [shopName, onChangeShopName] = React.useState(null);
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);
  const [shopAddress, onChangeShopAddress] = React.useState(null);

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

          <GooglePlacesAutocomplete
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
          />
        </SafeAreaView>

        <Button
          title="Go to the login page"
          onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
        />
      </ScrollView>
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
