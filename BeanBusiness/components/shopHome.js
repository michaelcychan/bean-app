/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './stylesheets';

export const ShopHome = ({navigation, route}) => {
  const [drinkerIDInput, setDrinkerIDInput] = React.useState(null);
  const [drinkerObject, setDrinkerObject] = React.useState(null);
  const [bean_count, setBeanCount] = React.useState(0);
  const shopID = route.params.shopID;

  const findDrinkerID = () => {
    return fetch(`http://localhost:5050/barista/finddrinker/${drinkerIDInput}`)
      .then(response => response.json())
      .then(json => {
        setDrinkerObject(json);
        console.log(json);
        return json;
      })
      .then(data => {
        setBeanCount(data.bean_count);
        setDrinkerIDInput(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // creating an object to be passed to backend for the addBean function
  let addBeanObject = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shopId: shopID,
      drinker_id: drinkerObject.drinker_id,
    }),
  };

  const addBean = () => {
    return fetch('http://localhost:5050/barista/addbeans', addBeanObject)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(setBeanCount(bean_count + 1))
      .catch(error => {
        console.error(error);
      });
  };

  const redeemDrink = () => {
    return fetch(
      `http://localhost:5050/barista/redeemdrink/${drinkerObject.drinker_id}`,
      {
        method: 'POST',
      },
    )
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(setBeanCount(bean_count - 10))
      .catch(error => {
        console.error(error);
      });
  };

  const redeemDrinkButton = () => {
    if (bean_count >= 10) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            redeemDrink();
          }}>
          <Text>Redeem a drink ☕</Text>
        </TouchableOpacity>
      );
    } else {
      return <Text>Drinker has less than 10 beans. Drink more to earn!</Text>;
    }
  };

  const addBeanButtons = () => {
    if (drinkerObject && drinkerObject != 'No such drinker') {
      return (
        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}>
          <Text style={styles.subtitle}>Drinker Details</Text>
          <Text>Drinker ID: {drinkerObject.drinker_id}</Text>
          <Text>
            Name: {drinkerObject.firstname} {drinkerObject.lastname}
          </Text>
          <Text>Bean count: {bean_count}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addBean();
            }}>
            <Text>Add a bean 🫘</Text>
          </TouchableOpacity>
          {redeemDrinkButton()}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 100,
          align: 'center',
          flex: 1,
        }}>
        <Text style={{alignSelf: 'center'}}>
          Enter Customer ID number below:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setDrinkerIDInput}
          value={drinkerIDInput}
          placeholder="Enter customer's membership ID"
          keyboardType="numeric"
          maxLength={6}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            findDrinkerID();
          }}>
          <Text>Search user</Text>
        </TouchableOpacity>
      </View>
      {addBeanButtons()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
