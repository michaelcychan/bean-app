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

export const ShopNameScreen = ({navigation, route}) => {
  const [shopName, onChangeShopName] = React.useState(null);

  const nextPage = () => {
    navigation.navigate('Logo', {
      shopEmail: route.params.shopEmail,
      shopPassword: route.params.shopPassword,
      shopName: shopName,
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
      <Text>Fill in your shop's name</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopName}
        value={shopName}
        placeholder="Enter your shop's name"
        keyboardType="default"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nextPage();
        }}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
