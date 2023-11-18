import * as React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import RegistrationPage from './screens/RegistrationPage';
import AccountRecoveryPage from './screens/AccountRecoveryPage';

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>{
		<Stack.Navigator initialRouteName="Landing">
			<Stack.Screen name="Landing" component={LandingPage} />
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="Home" component={HomePage} />
			<Stack.Screen name="Registration" component={RegistrationPage} />
			<Stack.Screen name="Recovery" component={AccountRecoveryPage} />
		</Stack.Navigator>
	  }</NavigationContainer>
  );
}

export default App;