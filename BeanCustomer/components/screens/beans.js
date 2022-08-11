import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import {styles} from '../stylesheet';
import ConfettiCannon from 'react-native-confetti-cannon';
import {backendDomain} from '../backendDomain';

export const Beans = ({navigation, route}) => {
  // getting userId from params to pass to get request
   const userId = route.params.userId;
  // creating a empty array variable that can take the shop list from customer
  const [shopList, setShopList] = React.useState([]);

  const [shopInfo, setShopInfo] = React.useState(false)

  // fetch function to get shopList from database for user, and set shopList variable to it

  React.useEffect(() => {
    fetch(`${backendDomain}drinker/${userId}`)
      .then(response => response.json())
      .then(json => {
        return json
      })
      .then(data => {
        setShopList(data.reverse());
        return data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [beanCount, setBeanCount] = React.useState(null)

  const [website, setWebsite] = React.useState('')
  const [shopOpeningHours, setOpeningHours] = React.useState([])
  const [name, setName] = React.useState('')

  const showShopInfo = () => {
    if(shopInfo === true) {
      return (
        <View style={styles.shop_info}> 
        {confetti()}
        <TouchableOpacity 
            style={styles.button}
            onPress={() => 
              setShopInfo(false)
            }>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>{name}</Text>
          <Text>{website}</Text>
          <Text>{beanCount} 🫘</Text>
          <Text>  </Text>
          <Text>Opening Hours:</Text>
          <Text>Monday: {shopOpeningHours[0]}</Text>
          <Text>Tuesday: {shopOpeningHours[1]}</Text>
          <Text>Wednesday: {shopOpeningHours[2]}</Text>
          <Text>Thursday: {shopOpeningHours[3]}</Text>
          <Text>Friday: {shopOpeningHours[4]}</Text>
          <Text>Saturday: {shopOpeningHours[5]}</Text>
          <Text>Sunday: {shopOpeningHours[6]}</Text>
        </View>
      ) 
    } 
  }

  const confetti = () => {
    if(beanCount >= 10) {
      return (
      <ConfettiCannon 
        count={1000}
        origin={{x: 100, y: 100}}
        fallSpeed={3000}
        fadeOut={true}
        />
      )
    }
  }

  return (
    <ScrollView>
      {showShopInfo()}
      <SafeAreaView style={styles.card_container}>
        {shopList.map(({shopName, bean_count, shopId, shopLogo, shopWebsite, openingHours}) => (
          <TouchableOpacity
            key={shopId} 
            style={styles.card_template}
            onPress={() => {
              setName(shopName)
              setWebsite(shopWebsite)
              setOpeningHours(openingHours)
              setBeanCount(Number(bean_count))
              setShopInfo(true);
            }} 
            >
            <Image style={styles.card_image} source={{uri: shopLogo}} />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>{shopName}</Text>
              <Text style={styles.card_beanCount}>🫘 {bean_count}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView> 
    </ScrollView>
  );
};
