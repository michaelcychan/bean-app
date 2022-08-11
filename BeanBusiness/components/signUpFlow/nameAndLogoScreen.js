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

export const NameAndLogoScreen = ({navigation, route}) => {
  const [shopName, onChangeShopName] = React.useState(null);
  const [shopLogo, onChangeShopLogo] = React.useState(null);
  const [shopWebsite, setShopWebsite] = React.useState(null);

  const nextPage = () => {
    navigation.navigate('Shop Details', {
      shopEmail: route.params.shopEmail,
      shopPassword: route.params.shopPassword,
      shopName: shopName,
      shopLogo: shopLogo,
      shopWebsite: shopWebsite,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../images/CoffeeMug.png')}
          style={styles.image}
        />
      </View>
      <Text>Now we need some further information.</Text>
      <Text>Fill in your shop's name, website, and provide your logo.</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopName}
        value={shopName}
        placeholder="Enter your shop's name"
        keyboardType="default"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeShopLogo}
        value={shopLogo}
        placeholder="Enter your shop logo url"
        keyboardType="default"
      />
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
