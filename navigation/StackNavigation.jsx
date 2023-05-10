import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/Content/ContentScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import MarketScreen from '../screens/Market/MarketScreen';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Content"
            component={ContentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              headerStyle: {backgroundColor: 'coral'},
            }}
          />
          <Stack.Screen
            name="Market"
            component={MarketScreen}
            options={{
              headerStyle: {backgroundColor: 'aqua'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
