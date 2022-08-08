import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
function FormList() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError('Email is required');
    } else if (email.length < 6) {
      setEmailError('Email should be minimum 6 characters');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    } else {
      setPasswordError('');
      passwordValid = true;
    }

    if (emailValid && passwordValid) {
      alert('Email: ' + email + '\nPassword: ' + password);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <View>
      <View>
        <View>
          <TextInput
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        {emailError.length > 0 && <Text>{emailError}</Text>}
        <View>
          <TextInput
            placeholder="Enter Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        {passwordError.length > 0 && <Text>{passwordError}</Text>}
        <Button onPress={handleSubmit} title="submit" />
      </View>
      <View>
        <Text>Email entered: {email}</Text>
        <Text>Password entered: {password}</Text>
      </View>
    </View>
  );
}
export default FormList;
