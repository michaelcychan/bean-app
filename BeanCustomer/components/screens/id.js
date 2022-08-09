import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';
import QRCode from 'react-native-qrcode-svg';

export const Id = (props) => {
  // sets userId variable from params when screen is created in tab navigator
  const userId = props.userId

  // Generating the string represented by QR code
  const qrcodeText = userId.toString();

  // Generating the QR Code
  const generateQRCode = () => {
    return (
      <View style={{marginTop: 30}}>
      <QRCode
      size={200}
      value={qrcodeText}
      enableLinearGradient={true}
      linearGradient={['rgb(0,49,45)','rgb(255,211,247)']}
      />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Membership Number</Text>
      <Text>{userId}</Text>
        {generateQRCode()}
    </View>
  );
};
