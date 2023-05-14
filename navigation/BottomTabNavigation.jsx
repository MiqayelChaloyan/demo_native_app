import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed/FeedScreen';
import Profile from '../screens/Profile/Profile';

// icons tabs
import FeedIcon from '../assets/icons/Feed.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import MessagesIcon from '../assets/icons/Messages.svg';

import StackNavigation from './StackNavigation';
import MessagesList from '../screens/Messages/MessagesList';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: 15,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={StackNavigation}
        options={{
          title: '',
          tabBarIcon: ({ tabInfo, focused }) => (
            <FeedIcon
              width={28}
              height={28}
              fill={focused ? '#5DB075' : '#BDBDBD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesList}
        options={{
          title: '',
          tabBarIcon: ({ tabInfo, focused }) => (
            <MessagesIcon
              width={28}
              height={28}
              fill={focused ? '#5DB075' : '#BDBDBD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ tabInfo, focused }) => (
            <ProfileIcon
              width={28}
              height={28}
              fill={focused ? '#5DB075' : '#BDBDBD'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
