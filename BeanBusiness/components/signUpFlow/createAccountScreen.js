import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../stylesheets';
import {backendDomain} from '../backendDomain';

export const CreateAccountScreen = ({navigation, route}) => {
  const shopEmail = route.params.shopEmail;
  const shopPassword = route.params.shopPassword;
  const shopName = route.params.shopName;
  const shopLogo = route.params.shopLogo;
  const shopWebsite = route.params.shopWebsite;

  const monday = route.params.monday;
  const tuesday = route.params.tuesday;
  const wednesday = route.params.wednesday;
  const thursday = route.params.thursday;
  const friday = route.params.friday;
  const saturday = route.params.saturday;
  const sunday = route.params.sunday;
  const shopOpeningHours = [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  ];

  console.log(shopOpeningHours);
  // creating an object of data to pass into baristaSignUp fetch request
  let newBaristaData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: shopEmail,
      password: shopPassword,
      shop_name: shopName,
      shopLogo: shopLogo,
      openingHours: shopOpeningHours,
      website: shopWebsite,
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
    <SafeAreaView style={styles.openingHoursContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../images/CoffeeMug.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View>
        <Text>Your details:</Text>
        <Text>Shop name: {shopName}</Text>
        <Text>Shop website: {shopWebsite}</Text>
        <Image source={{uri: shopLogo}} style={styles.image} />
        <Text>Email address: {shopEmail}</Text>
        <Text>Password: {shopPassword}</Text>
        <Text>Opening Hours:</Text>
        <Text>Monday: {monday}</Text>
        <Text>Tuesday: {tuesday}</Text>
        <Text>Wednesday: {wednesday}</Text>
        <Text>Thursday: {thursday}</Text>
        <Text>Friday: {friday}</Text>
        <Text>Saturday: {saturday}</Text>
        <Text>Sunday: {sunday}</Text>
      </View>
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
