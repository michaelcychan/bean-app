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

export const OpeningHoursScreen = ({navigation, route}) => {
  const shopEmail = route.params.shopEmail;
  const shopPassword = route.params.shopPassword;
  const shopName = route.params.shopName;
  const shopLogo = route.params.shopLogo;
  const shopWebsite = route.params.shopWebsite;
  const [shopOpeningHours, setShopOpeningHours] = React.useState(null);

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

  // each day's opening hours set by the corresponding text input
  const [mondayHours, setMondayHours] = React.useState(null);
  const [tuesdayHours, setTuesdayHours] = React.useState(null);
  const [wednesdayHours, setWednesdayHours] = React.useState(null);
  const [thursdayHours, setThursdayHours] = React.useState(null);
  const [fridayHours, setFridayHours] = React.useState(null);
  const [saturdayHours, setSaturdayHours] = React.useState(null);
  const [sundayHours, setSundayHours] = React.useState(null);

  // when called, passes the opening hours into the variable to be sent in post request
  const dailyOpeningHours = () => {
    let openingHours = {
      monday: mondayHours,
      tuesday: tuesdayHours,
      wednesday: wednesdayHours,
      thursday: thursdayHours,
      friday: fridayHours,
      saturday: saturdayHours,
      sunday: sundayHours,
    };
    setShopOpeningHours(openingHours);
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
      <Text>Customers need to know when they can get their coffee!</Text>
      <Text>Please provide your opening hours below</Text>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Monday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setMondayHours}
          value={mondayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Tuesday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setTuesdayHours}
          value={tuesdayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Wednesday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setWednesdayHours}
          value={wednesdayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Thursday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setThursdayHours}
          value={thursdayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Friday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setFridayHours}
          value={fridayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Saturday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setSaturdayHours}
          value={saturdayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursLabel}>Sunday:</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.hoursInput}
          onChangeText={setSundayHours}
          value={sundayHours}
          placeholder="hh:mm - hh:mm"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dailyOpeningHours();
          baristaSignUp();
        }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
