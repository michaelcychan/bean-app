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
      <Text style={styles.subtitle}>What's your website address?</Text>
      <Text>Need help creating a website? Let Loyal Bean help!</Text>
      <Text style={styles.link}>www.loyalbean.co.uk/website-builder</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={setShopWebsite}
        value={shopWebsite}
        placeholder="Enter your shop's website address'"
        keyboardType="default"
      />
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
