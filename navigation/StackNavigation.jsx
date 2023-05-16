import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/Content/ContentScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import MarketScreen from '../screens/Market/MarketScreen';
import AuthNavigation from './AuthNavigation';
import ExpensesScreen from '../screens/ExpensesScreen/ExpensesScreen';
import MessagesList from '../screens/Messages/MessagesList';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigation}
      />
      <Stack.Screen
        name="Market"
        component={MarketScreen}
      />
      <Stack.Screen
        name="Expenses"
        component={ExpensesScreen}
      />
      <Stack.Screen
        name="Chat"
        component={MessagesList}
      />
    </Stack.Navigator>
  );
}
