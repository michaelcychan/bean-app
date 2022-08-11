import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../stylesheets';

export const EmailAndPasswordScreen = ({navigation}) => {
  const [shopEmail, onChangeShopEmail] = React.useState(null);
  const [shopPassword, onChangeShopPassword] = React.useState(null);

  const nextPage = response => {
    navigation.navigate('Name/Logo', {
      shopEmail: shopEmail,
      shopPassword: shopPassword,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/CoffeeMug.png')} style={styles.image} />
      <Text>Please enter the email and password you want to log in with</Text>
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
        style={styles.button}
        onPress={() => {
          nextPage();
        }}>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
