import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import {styles} from '../stylesheet';

export const Beans = ({navigation, route}) => {
  // getting userId from params to pass to get request
   const userId = route.params.userId;
  // creating a empty array variable that can take the shop list from customer
  const [shopList, setShopList] = React.useState([]);

  const [shopInfo, setShopInfo] = React.useState(false)

  // fetch function to get shopList from database for user, and set shopList variable to it
  React.useEffect(() => {
    fetch(`http://localhost:5050/drinker/${userId}`)
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

  const showShopInfo = () => {
    if(shopInfo == true) {
      return (
        <View style={styles.shop_info}> 
          <Text>Beans Collected</Text>
          <Text>{beanCount} /10</Text>
        </View>
      )
    }
  }

  return (
    <ScrollView>
      {showShopInfo()}
      <SafeAreaView style={styles.card_container}>
        {shopList.map(({shopName, bean_count, shopId, shopLogo}) => (
          <TouchableOpacity
            key={shopId} 
            style={styles.card_template}
            onPress={() => {
              setShopInfo(true);
              setBeanCount(bean_count)
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
