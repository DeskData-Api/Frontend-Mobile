import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './src/BottomTab/Home';
import RegisterScreen from './src/BottomTab/Registro';
import ProfileScreen from "./src/BottomTab/Conta";
import DetailScreen from './src/Stack/Detail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileScreenWithDetail() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreenWithDetail} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
