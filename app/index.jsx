import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GatepassScreen from './screens/GatepassScreen';
import DetailScreen from './screens/DetailScreen';
const Stack = createStackNavigator();

export default function index() {
 return(
      <Stack.Navigator>
        <Stack.Screen name="GatePass" component={HomeScreen} />
        <Stack.Screen name="GatepassScreen" component={GatepassScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
 );
  

}
