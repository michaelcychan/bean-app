import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './stylesheets';
import {backendDomain} from './backendDomain';

export const LoginScreen = ({navigation}) => {
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);

  // creating an object of data to pass into login fetch request
  let baristaLogInData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: shopEmail,
      password: shopPassword,
    }),
  };

  const logIn = userData => {
    if (userData.shopId !== undefined) {
      navigation.navigate('BeanBusinessApp', {
        shopId: userData.shopId,
        shopName: userData.shop_name,
      });
    }
  };

  // sending request to backend server attempting to log in
  const baristaLogIn = () => {
    fetch(`${backendDomain}barista/log-in`, baristaLogInData)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => {
        logIn(data);
      })
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
          resizeMethod="resize"
          source={require('./images/BeanLogo.png')}
          style={styles.homeImage}
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>Login to Loyal Bean</Text>
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
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => {
          baristaLogIn();
        }}>
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
