import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import SupportMessageScreen from '../screens/SupportMessageScreen/SupportMessageScreen';

const Stack = createNativeStackNavigator();

export default function SettingsNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
