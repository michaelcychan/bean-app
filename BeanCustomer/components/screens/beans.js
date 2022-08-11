import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import {styles} from '../stylesheet';
import ConfettiCannon from 'react-native-confetti-cannon';

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

  const [website, setWebsite] = React.useState('')
  const [shopOpeningHours, setOpeningHours] = React.useState([])

  const showShopInfo = () => {
    if(shopInfo === true) {
      confetti()
      return (
        <View style={styles.shop_info}> 
        <TouchableOpacity 
            style={styles.button}
            onPress={() => 
              setShopInfo(false)
            }>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>Beans Collected</Text>
          <Text>{beanCount} /10 🫘</Text>
        </View>
      ) 
    } 
  }

  const confetti = () => {
    if(beanCount == '6') {
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
  // const confettiMessage = () => {
  //   if(beanCount == "6") {
  //     return (
  //       <View style={styles.shop_info}>
  //       <Text> You have 1 free coffee to claim!! 🫘🫘🫘</Text>
  //       {confetti()}
  //       <TouchableOpacity 
  //           style={styles.button}
  //           onPress={() => setShopInfo(false)
  //           }>
  //           <Text>Go back</Text>
  //         </TouchableOpacity>
  //       </View>
  //     )
  //   } else {
  //     return (
  //       <View style={styles.shop_info}>
  //       <Text>Beans Collected</Text>
  //     <Text>{beanCount + "/10🫘"}</Text>
  //     <TouchableOpacity 
  //           style={styles.button}
  //           onPress={() => 
  //             setShopInfo(false)
  //           }
  //           >
  //           <Text>Go back</Text>
  //         </TouchableOpacity>
  //       </View>
  //     )
  //   }
  // }

  //

  return (
    <ScrollView>
      {showShopInfo()}
      <SafeAreaView style={styles.card_container}>
      {/* {confettiMessage()} */}
        {shopList.map(({shopName, bean_count, shopId, shopLogo, shopWebsite, openingHours}) => (
          <TouchableOpacity
            key={shopId} 
            style={styles.card_template}
            onPress={() => {
              setBeanCount(bean_count)
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
