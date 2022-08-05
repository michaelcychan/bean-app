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

export const EnterID = ({navigation}) => {
  const [drinkerIDInput, onChangeDrinkerIDInput] = React.useState(null);
  const [drinkerObject, setDrinkerObject] = React.useState(null);

  const findDrinkerID = () => {
    return fetch(`http://localhost:5050/barista/finddrinker/${drinkerIDInput}`)
      .then(response => response.json())
      .then(json => {
        setDrinkerObject(json);
        console.log(drinkerObject);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const addBean = () => {
    const bodyJSON = JSON.stringify(`drinker_id: ${drinkerID}`);
    return fetch(`http://localhost:5050/barista/addBeans/${drinkerID}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
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
      </SafeAreaView>
      <Button title="Search User" onPress={() => findDrinkerID()} />
      <View>
        {(() => {
          if (drinkerObject != null) {
            return (
              <View>
                <Text>Drinker Details: {drinkerObject.bean_count}</Text>
                <Button title="Add a bean" onPress={() => addBean()} />
                <Button title="Redeem a drink" />
              </View>
            )
          }
        })}
      </View>
    </>
  );
};

