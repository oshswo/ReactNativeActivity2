import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Enter your email"
    />

    <TextInput
      style={styles.input}
      placeholder="Enter your password"
      secureTextEntry={true}
    />

    <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </TouchableOpacity>

    <Button
      title="Login"
      onPress={() => {
        navigation.navigate('Home');
      }}
      style={styles.loginButton}
    />

    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
      
	  <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
    </TouchableOpacity>
	
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 20,
	alignSelf: 'flex-end',
  },
  loginButton: {
	marginBottom: 20,
  },
  signupLink: {
  color: 'blue',
  marginTop: 20,
  },
});

export default LoginPage;