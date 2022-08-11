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
  const [bean_count, setBeanCount] = React.useState('X');
  const shopID = route.params.shopId.user;

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
            object => object.shopId === shopID,
          ).bean_count;
          setBeanCount(beanCount);
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
      .then(data => setBeanCount(data))
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
      .then(data => setBeanCount(data))
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
    if (drinkerObject != null && drinkerObject != 'No such drinker') {
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
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flex: 2,
        }}>
      {showQRCodeScanner()}
      </View>
      <View
        style={{
          marginTop: 100,
          align: 'center',
          flex: 9,
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
      
      {addBeanButtons()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Log out</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
