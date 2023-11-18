import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegistrationPage = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Name:</Text>
    <TextInput
      placeholder="Name"
    />
	 <Text>Email:</Text>
    <TextInput
      placeholder="Email"
    />
	 <Text>Password:</Text>
    <TextInput
      placeholder="Password"
	  secureTextEntry={true}
    />
	<Button
      title="Sign up"
      onPress={() => {
        navigation.navigate('Login');
      }}
    />
	<TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={{ color: 'blue' }}>Already have an account? Login</Text>
    </TouchableOpacity>
  </View>
);

export default RegistrationPage;