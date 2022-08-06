import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet'

export const Beans = ({navigation, route}) => {
  // creating a beans variable that has a default state of 0
  const [beans, setBeans] = React.useState(0);

  // this variable will eventually be the user's email or ID
  const fixedemail = 'michael_coffee@brewer.net';

  // fetch function to get bean_count from database for user, and set beans variable to that value
  const getBeanCount = () => {
    return fetch(`http://localhost:5050/drinker/${fixedemail}`)
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
    <SafeAreaView style={styles.container}>
      <Text>Beans Collected</Text>
      <View>
        {/* displaying beans variable on screen */}
        <Text>{beans}</Text>
      </View>
    </SafeAreaView>
  );
};
