import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet'

export const Beans = ({navigation, route}) => {
  // creating a beans variable that has a default state of 0
  const [beans, setBeans] = React.useState(0);
  const userId = route.params.userId
  const shops = [{
    shopName: "Coffee Shop",
    shopBeans: beans
  }]

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

  return (
    <SafeAreaView style={styles.card_container}>
        <View style={styles.card_template}>
          <View style={styles.text_container}>
            <Text style={styles.card_title}>Coffee Shop Name</Text>
            <Text style={styles.card_beanCount}>🫘 {beans}</Text>
          </View>
        </View>
        <View style={styles.card_template}>
          <View style={styles.text_container}>
            <Text style={styles.card_title}>Coffee Shop Name</Text>
            <Text style={styles.card_beanCount}>🫘 {beans}</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};
