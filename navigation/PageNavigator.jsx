import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/Content/ContentScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import MarketScreen from '../screens/Market/MarketScreen';
import UserOptions from '../screens/UserOptions/UserOptions';

const Stack = createNativeStackNavigator();

export default function PageNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Content" component={ContentScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Options" component={UserOptions} />
    </Stack.Navigator>
  );
}
