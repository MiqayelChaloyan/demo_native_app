import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import MessagesIcon from '../assets/icons/Messages.svg';
import SupportIcon from '../assets/icons/Support.svg';
import {horizontalScale, verticalScale} from '../assets/metrics/Metrics';
import MessagesUsers from '../screens/MessagesUsers/MessagesUsers';
import ProfileScreen from '../screens/ProfileScreen/profile/ProfileScreen';
import SupportMessageScreen from '../screens/SupportMessageScreen/SupportMessageScreen';
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
          paddingTop: verticalScale(15),
        },
      }}>
      <Tab.Screen
        name="Pages"
        component={PageNavigation}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={horizontalScale(25)}
              height={verticalScale(25)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
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
              width={horizontalScale(25)}
              height={verticalScale(25)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
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
              width={horizontalScale(25)}
              height={verticalScale(25)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportMessageScreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <SupportIcon
              width={horizontalScale(25)}
              height={verticalScale(25)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
