import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet'

export const Beans = ({navigation, route}) => {
  const [beans, setBeans] = React.useState(0);

  const email = 'michael_coffee@brewer.net';

  const getBeanCount = () => {
    return fetch(`http://localhost:5050/drinker/${email}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setBeans(json.bean_count);
      })
      .catch(error => {
        console.error(error);
      });
  };

  getBeanCount();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Beans Collected</Text>
      <View>
        <Text>{beans}</Text>
      </View>
    </SafeAreaView>
  );
};
