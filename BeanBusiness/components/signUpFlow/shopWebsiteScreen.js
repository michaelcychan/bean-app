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
          resizeMethod="resize"
          source={require('../images/BeanLogo.png')}
          style={styles.homeImage}
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>Do you have a website?</Text>
      <Text style={{color: 'white'}}>
        Your customers will want to get as much information
      </Text>
      <Text style={{color: 'white'}}>
        as they can about their favourite coffee shop!
      </Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={setShopWebsite}
        value={shopWebsite}
        placeholder="Enter your shop's web address"
        keyboardType="default"
      />
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => {
          nextPage();
        }}>
        <Text style={styles.primaryButtonText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
