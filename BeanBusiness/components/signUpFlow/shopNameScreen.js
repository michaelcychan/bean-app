import React from 'react';
import {
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
          resizeMethod="resize"
          source={require('../images/BeanLogo.png')}
          style={styles.homeImage}
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>First, tell us your shop's name</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopName}
        value={shopName}
        placeholder="Enter your shop's name"
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
