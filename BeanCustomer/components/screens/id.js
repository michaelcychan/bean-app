import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';
import QRCode from 'react-native-qrcode-svg';

export const Id = props => {
  const user = props.user;
  // sets userId variable from params when screen is created in tab navigator
  const userId = props.user.drinker_id;

  // Generating the string represented by QR code
  const qrcodeText = userId.toString();

  // Generating the QR Code
  const generateQRCode = () => {
    return (
      <View style={{marginTop: 30}}>
        <QRCode
          size={200}
          value={qrcodeText}
          backgroundColor={'floralwhite'}
          color={'midnightblue'}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        {user.firstname} {user.lastname}
      </Text>
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        Membership Number: {userId}
      </Text>
      {generateQRCode()}
    </View>
  );
};
