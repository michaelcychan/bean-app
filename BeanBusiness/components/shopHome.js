/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {styles} from './stylesheets';
import {backendDomain} from './backendDomain';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export const ShopHome = ({navigation, route}) => {

  const [drinkerIDInput, setDrinkerIDInput] = React.useState(null);
  const [drinkerObject, setDrinkerObject] = React.useState(null);
  const [bean_count, setBeanCount] = React.useState(0);
  const shopID = route.params.shopId;
  const shopName = route.params.shopName;

  // qr scanner parts
  const [dataFromQR, setDataFromQR] = React.useState('');
  
  const onSuccess = e => {
    console.log(e.data);
    setDrinkerIDInput(e.data);
    scanner.reactivate();
  };
  // generate qr scanner camera
  const showQRCodeScanner = () => (
      <QRCodeScanner
        ref={node => {
          scanner = node;
        }}
        cameraStyle={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={5000}
      />
  );


  const findDrinkerID = () => {
    let findBeanObject = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shopID: shopID,
        drinker_id: drinkerIDInput,
      }),
    };
    return fetch(`${backendDomain}barista/finddrinker`, findBeanObject)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => {
        if (data != 'No such drinker') {
          setDrinkerObject(data);
        } else {
          setDrinkerObject(null);
        }
        return data;
      })
      .then(data => {
        if (data != 'No such drinker') {
          const beanCount = data.bean_counts.find(
            object => object.shopId == shopID,
          ).bean_count;
          setBeanCount(Number(beanCount));
          setDrinkerIDInput(null);
          return data;
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const addBean = () => {
    // creating an object to be passed to backend for the addBean function
    let updateBeanObject = {
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

    return fetch(`${backendDomain}barista/addbeans`, updateBeanObject)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => setBeanCount(Number(data)))
      .catch(error => {
        console.error(error);
      });
  };

  const redeemDrink = () => {
    // creating an object to be passed to backend for the redeemDrink function
    let updateBeanObject = {
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

    return fetch(`${backendDomain}barista/redeemdrink`, updateBeanObject)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then(data => setBeanCount(Number(data)))
      .catch(error => {
        console.error(error);
      });
  };

  const redeemDrinkButton = () => {
    if (bean_count >= 10) {
      return (
        <TouchableOpacity
          style={styles.beanButton}
          onPress={() => {
            redeemDrink();
          }}>
          <Text style={styles.primaryButtonText}>Redeem a drink ☕</Text>
        </TouchableOpacity>
      );
    }
  };

  const addBeanButtons = () => {
    if (drinkerObject != null && drinkerObject != 'No such drinker') {
      return (
        <View style={styles.homeScreenContainer}>
          <View style={styles.details}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                textAlign: 'center',
              }}>
              {drinkerObject.firstname} {drinkerObject.lastname}
            </Text>
            <Text style={styles.detailsText}>
              Drinker ID: {drinkerObject.drinker_id}
            </Text>
            <Text style={styles.detailsText}>Bean count: {bean_count}</Text>
          </View>
          <TouchableOpacity
            style={styles.beanButton}
            onPress={() => {
              addBean();
            }}>
            <Text style={styles.primaryButtonText}>Add a bean 🫘</Text>
          </TouchableOpacity>
          {redeemDrinkButton()}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <View style={styles.searchBar}>
      {showQRCodeScanner()}
        <TextInput
          style={styles.input}
          onChangeText={setDrinkerIDInput}
          value={drinkerIDInput}
          placeholder="Enter customer's membership ID"
          keyboardType="numeric"
          maxLength={6}
        />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            findDrinkerID();
          }}>
          <Text style={styles.primaryButtonText}>Search user</Text>
        </TouchableOpacity>
      </View>
      {addBeanButtons()}
    </SafeAreaView>
  );
};
