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

export const OpeningHoursScreen = ({navigation, route}) => {
  // each day's opening hours set by the corresponding text input
  const [mondayHours, setMondayHours] = React.useState(null);
  const [tuesdayHours, setTuesdayHours] = React.useState(null);
  const [wednesdayHours, setWednesdayHours] = React.useState(null);
  const [thursdayHours, setThursdayHours] = React.useState(null);
  const [fridayHours, setFridayHours] = React.useState(null);
  const [saturdayHours, setSaturdayHours] = React.useState(null);
  const [sundayHours, setSundayHours] = React.useState(null);

  const nextPage = () => {
    navigation.navigate('Create Account', {
      shopEmail: route.params.shopEmail,
      shopPassword: route.params.shopPassword,
      shopName: route.params.shopName,
      shopLogo: route.params.shopLogo,
      shopWebsite: route.params.shopWebsite,
      monday: mondayHours,
      tuesday: tuesdayHours,
      wednesday: wednesdayHours,
      thursday: thursdayHours,
      friday: fridayHours,
      saturday: saturdayHours,
      sunday: sundayHours,
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
        style={styles.purpleButton}
        onPress={() => {
          nextPage();
        }}>
        <Text style={styles.buttontext}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
