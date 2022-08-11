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

export const ShopWebsiteScreen = ({navigation, route}) => {
  const [shopWebsite, setShopWebsite] = React.useState(null);

  const nextPage = () => {
    navigation.navigate('Opening Hours', {
      shopEmail: route.params.shopEmail,
      shopPassword: route.params.shopPassword,
      shopName: route.params.shopName,
      shopLogo: route.params.shopLogo,
      shopWebsite: shopWebsite,
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
      <Text>Fill in your shop's website</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={setShopWebsite}
        value={shopWebsite}
        placeholder="Enter your shop's website address'"
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
