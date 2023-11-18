import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	<Text>Restore Password</Text>
	<Text>Email:</Text>
    <TextInput
      placeholder="Email Address"
    />
	
	<Button
      title="Send Reset Instructions"
      onPress={() => {
        navigation.navigate('Login');
      }}
    />
  </View>
);

export default AccountRecoveryPage;