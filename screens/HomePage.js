import React from 'react';
import { Button, View, Text } from 'react-native';

const HomePage = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Welcome to your Home Page</Text>
	<Button
      title="Logout"
      onPress={() => {
        navigation.navigate('Landing');
      }}
    />
  </View>
);

export default HomePage;