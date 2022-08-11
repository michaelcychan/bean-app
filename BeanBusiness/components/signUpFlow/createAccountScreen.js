import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          resizeMethod="resize"
          source={require('../images/BeanLogo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.title}>Your details</Text>
        <Image source={{uri: shopLogo}} style={styles.logo} />
        <Text style={styles.detailsText}>Shop name: {shopName}</Text>
        <Text style={styles.detailsText}>Shop website: {shopWebsite}</Text>
        <Text style={styles.detailsText}>Email address: {shopEmail}</Text>
        <Text style={styles.detailsText}>Password: {shopPassword}</Text>
        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={styles.detailsText}>Opening Hours:</Text>
          <Text style={styles.openingHoursText}>Monday: {monday}</Text>
          <Text style={styles.openingHoursText}>Tuesday: {tuesday}</Text>
          <Text style={styles.openingHoursText}>Wednesday: {wednesday}</Text>
          <Text style={styles.openingHoursText}>Thursday: {thursday}</Text>
          <Text style={styles.openingHoursText}>Friday: {friday}</Text>
          <Text style={styles.openingHoursText}>Saturday: {saturday}</Text>
          <Text style={styles.openingHoursText}>Sunday: {sunday}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.purpleButton}
        onPress={() => {
          baristaSignUp();
        }}>
        <Text style={styles.buttontext}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
