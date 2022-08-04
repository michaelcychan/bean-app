import React, {useEffect, useState} from 'react';
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
  Alert,
} from 'react-native';
import {styles} from './stylesheets';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import {useAuth} from '../providers/AuthProvider';

export function SignupScreen({navigation}) {
  const [shopName, onChangeShopName] = React.useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp, signIn} = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate('Projects');
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log('Press sign in');
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
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
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry={true}
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
          title="Go to the login page"
          onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}
        />
        <Button onPress={onPressSignIn} title="Sign In" />
        <Button onPress={onPressSignUp} title="Sign Up" />
      </ScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
