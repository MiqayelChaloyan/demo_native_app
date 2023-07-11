import {memo, useContext} from 'react';
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
import {GlobalDataContext} from '../contexts/context';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const {loggedIn} = useContext(GlobalDataContext);

  const renderTabBarIcon = (IconComponent, focused) => {
    return (
      <IconComponent
        width={horizontalScale(20)}
        height={verticalScale(20)}
        fill={focused ? theme.colors.primary_green : theme.colors.cool_gray}
      />
    );
  };

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
          tabBarIcon: ({focused}) => renderTabBarIcon(HomeIcon, focused),
        }}
      />
      <Tab.Screen
        name="Users"
        component={loggedIn ? AllUsersListScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({focused}) => renderTabBarIcon(UsersListIcon, focused),
        }}
      />
      <Tab.Screen
        name="Support"
        component={loggedIn ? SupportMessageScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({focused}) => renderTabBarIcon(SupportIcon, focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={loggedIn ? ProfileScreen : AuthNavigation}
        options={{
          title: '',
          tabBarIcon: ({focused}) => renderTabBarIcon(ProfileIcon, focused),
        }}
      />
    </Tab.Navigator>
  );
}

export default memo(BottomTabNavigation);
