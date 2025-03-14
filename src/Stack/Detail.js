import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
