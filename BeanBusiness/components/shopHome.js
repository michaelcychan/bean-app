import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {styles} from './stylesheets';

export const ShopHome = ({navigation, route}) => {
  const [drinkerIDInput, onChangeDrinkerIDInput] = React.useState(null);
  const [drinkerObject, setDrinkerObject] = React.useState(null);
  const [drinkerID, setDrinkerID] = React.useState();
  const userEmail = route.params.email;

  const findDrinkerID = () => {
    return fetch(`http://localhost:5050/barista/finddrinker/${drinkerIDInput}`)
      .then(response => response.json())
      .then(json => {
        setDrinkerObject(json);
        console.log(drinkerObject);
        setDrinkerID(json.drinker_id);
        console.log(drinkerID);
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
        console.log(json);
      })
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
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrinkerIDInput}
          value={drinkerIDInput}
          placeholder="Enter customer's membership ID"
          keyboardType="numeric"
          maxLength={6}
        />
        <View>
          <Text style={styles.subtitle}>{drinkerID}</Text>
          {(drinkerObject == null)
            ? <Text style={styles.subtitle}>Input one drinker id</Text>
            : <View>
              <Text>Drinker Details: {drinkerObject.bean_count}</Text>
              <Button title="Add a bean" onPress={() => addBean()} />
              {(drinkerObject.bean_count >= 10)
                ? <Button title="Redeem a drink" onPress={() => redeemDrink()} />
                : <Text>Drinker has less than 10 beans. Drink more to earn!</Text>
              }
              </View>
          }
        </View>
        <Button title="Search User" onPress={() => findDrinkerID()} />
      </SafeAreaView>
    </>
  );
};
