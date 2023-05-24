import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/Content/ContentScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import ItemDescriptionScreen from '../screens/ItemDescriptionScreen/ItemDescriptionScreen';
import MarketScreen from '../screens/Market/MarketScreen';

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
