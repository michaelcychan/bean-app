import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Beans = ({navigation, route}) => {
  // creating a beans variable that has a default state of 0
  const [beans, setBeans] = React.useState(0);
  const userId = route.params.userId;

  // fetch function to get bean_count from database for user, and set beans variable to that value
  const getBeanCount = () => {
    return fetch(`http://localhost:5050/drinker/${userId}`)
      .then(response => response.json())
      .then(json => {
        setBeans(json.bean_count);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // getBeanCount function called when component is rendered
  getBeanCount();

  const shops = [
    {
      shopName: 'Coffee Shop1',
      shopBeans: 7,
      shopImage:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80',
      id: 1,
    },
    {
      shopName: 'Coffee Shop2',
      shopBeans: 4,
      shopImage:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80',
      id: 2,
    },
  ];

  return (
    <SafeAreaView style={styles.card_container}>
      {shops.map(({shopName, shopImage, shopBeans, id}) => (
        <View key={id} style={styles.card_template}>
          <Image style={styles.card_image} source={{uri: shopImage}} />
          <View style={styles.text_container}>
            <Text style={styles.card_title}>{shopName}</Text>
            <Text style={styles.card_beanCount}>🫘 {shopBeans}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};
