import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/ContentScreen/ContentScreen';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import ItemDescriptionScreen from '../screens/ItemDescriptionScreen/ItemDescriptionScreen';
import MarketScreen from '../screens/MarketScreen/MarketScreen';

const Stack = createNativeStackNavigator();

export default function PageNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Content" component={ContentScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Description" component={ItemDescriptionScreen} />
    </Stack.Navigator>
  );
}
