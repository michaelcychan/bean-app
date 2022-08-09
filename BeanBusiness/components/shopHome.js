/* eslint-disable react-native/no-inline-styles */
'use strict';
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {styles} from './stylesheets';

export const ShopHome = ({navigation, route}) => {
  const [drinkerIDInput, setDrinkerIDInput] = React.useState(null);
  const [drinkerObject, setDrinkerObject] = React.useState(null);
  const [bean_count, setBeanCount] = React.useState(0);
  const userEmail = route.params.email;

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err => console.error('error', err));
  };

  const QRScanner = () => {
    return (
      <View>
      <QRCodeScanner
        onRead={onSuccess()}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text>
            Scan the QR Code
          </Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      </View>
    )
  };

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

  const addBean = () => {
    return fetch(
      `http://localhost:5050/barista/addbeans/${drinkerObject.drinker_id}`,
      {
        method: 'POST',
      },
    )
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
          {QRScanner()}
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
