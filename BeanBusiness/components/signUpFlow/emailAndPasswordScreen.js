import React from 'react';
import {
  SafeAreaView,
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
    navigation.navigate('Name', {
      shopEmail: shopEmail,
      shopPassword: shopPassword,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../images/CoffeeMug.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text>Please enter your email and password</Text>
      <Text>Keep these details safe, you'll need them to login</Text>
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
