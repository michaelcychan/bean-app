import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';
import {backendDomain} from '../backendDomain';

export const Beans = ({navigation, route}) => {
  // getting userId from params to pass to get request
   const userId = route.params.userId;
  // creating a empty array variable that can take the shop list from customer
  const [shopList, setShopList] = React.useState([]);
  console.log('shop')

  // fetch function to get shopList from database for user, and set shopList variable to it
  const getShopList = () => {
    return fetch(`${backendDomain}drinker/${userId}`)
      .then(response => response.json())
      .then(json => {
        return json
      })
      .then(data => {
        setShopList(data);
        return data
      })
      .catch(error => {
        console.error(error);
      });
  };

  // getBeanCount function called when component is rendered
  getShopList();

  return (
    <SafeAreaView style={styles.card_container}>
      {shopList.map(({shopName, bean_count, shopId}) => (
        <View key={shopId} style={styles.card_template}>
          {/* <Image style={styles.card_image} source={{uri: shopImage}} /> */}
          <View style={styles.text_container}>
            <Text style={styles.card_title}>{shopName}</Text>
            <Text style={styles.card_beanCount}>🫘 {bean_count}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};
