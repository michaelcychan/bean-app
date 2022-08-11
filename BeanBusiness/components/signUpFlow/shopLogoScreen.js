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

export const ShopLogoScreen = ({navigation, route}) => {
  const [shopLogo, onChangeShopLogo] = React.useState(null);

  const nextPage = () => {
    navigation.navigate('Website', {
      shopEmail: route.params.shopEmail,
      shopPassword: route.params.shopPassword,
      shopName: route.params.shopName,
      shopLogo: shopLogo,
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
      <Text>Provide your shop's logo</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopLogo}
        value={shopLogo}
        placeholder="Enter your shop logo url"
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
