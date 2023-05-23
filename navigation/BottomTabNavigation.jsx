import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import MessagesIcon from '../assets/icons/Messages.svg';
import MessagesUsers from '../screens/MessagesUsers/MessagesUsers';
import ProfileScreen from '../screens/Profile/profile/ProfileScreen';
import PageNavigation from './PageNavigator';
import {theme} from '../assets/theme/theme';

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
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={25}
              height={35}
              fill={focused ? theme.colors.green : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesUsers}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <MessagesIcon
              width={25}
              height={35}
              fill={focused ? theme.colors.green : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <ProfileIcon
              width={25}
              height={35}
              fill={focused ? theme.colors.green : theme.colors.lightGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
