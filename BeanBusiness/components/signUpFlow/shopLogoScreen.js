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
          resizeMethod="resize"
          source={require('../images/BeanLogo.png')}
          style={styles.homeImage}
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>Now we need your shop's logo</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopLogo}
        value={shopLogo}
        placeholder="Enter your shop logo url"
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
