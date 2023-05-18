import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import FeedIcon from '../assets/icons/Feed.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import MessagesIcon from '../assets/icons/Messages.svg';
import MessagesUsers from '../screens/MessagesUsers/MessagesUsers';
import PageNavigation from './PageNavigator';

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
        name="Pages"
        component={PageNavigation}
        options={{
          title: '',
          tabBarIcon: ({ tabInfo, focused }) => (
            <FeedIcon
              width={40}
              height={36}
              fill={focused ? '#5DB075' : '#BDBDBD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesUsers}
        options={{
          title: '',
          tabBarIcon: ({ tabInfo, focused }) => (
            <MessagesIcon
              width={25}
              height={35}
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
              width={25}
              height={35}
              fill={focused ? '#5DB075' : '#BDBDBD'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
