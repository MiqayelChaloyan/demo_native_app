import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import UsersListIcon from '../assets/icons/Users.svg';
import SupportIcon from '../assets/icons/Support.svg';
import {horizontalScale, verticalScale} from '../assets/metrics/Metrics';
import ProfileScreen from '../screens/ProfileScreen/profile';
import SupportMessageScreen from '../screens/SupportMessageScreen';
import PageNavigation from './PageNavigator';
import AllUsersListScreen from '../screens/AllUsersListScreen/index';
import AuthNavigation from './AuthNavigation';
import {theme} from '../assets/theme/theme';
import {useContext} from 'react';
import {GlobalDataContext} from '../contexts/context';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const {loggedIn} = useContext(GlobalDataContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: verticalScale(15),
        },
      }}>
      <Tab.Screen
        name="Pages"
        component={PageNavigation}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={horizontalScale(21)}
              height={verticalScale(21)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={loggedIn ? AllUsersListScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <UsersListIcon
              width={horizontalScale(22)}
              height={verticalScale(22)}
              fill={focused
                ? theme.colors.primary_green
                : theme.colors.cool_gray} />
          ),
        }} />
      <Tab.Screen
        name="Support"
        component={loggedIn ? SupportMessageScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <SupportIcon
              width={horizontalScale(23)}
              height={verticalScale(23)}
              fill={focused
                ? theme.colors.primary_green
                : theme.colors.cool_gray} />
          ),
        }} />
      <Tab.Screen
        name="Profile"
        component={loggedIn ? ProfileScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={horizontalScale(20)}
              height={verticalScale(20)}
              fill={focused
                ? theme.colors.primary_green
                : theme.colors.cool_gray} />
          ),
        }} />
    </Tab.Navigator>
  );
}
