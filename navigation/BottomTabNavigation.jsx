import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import MessagesIcon from '../assets/icons/Messages.svg';
import SupportIcon from '../assets/icons/Support.svg';
import { horizontalScale, verticalScale } from '../assets/metrics/Metrics';
import ProfileScreen from '../screens/ProfileScreen/profile';
import SupportMessageScreen from '../screens/SupportMessageScreen';
import PageNavigation from './PageNavigator';
import UsersScreen from '../screens/UsersScreen/index';
import AuthNavigation from './AuthNavigation';
import { theme } from '../assets/theme/theme';
import { useContext } from 'react';
import { GlobalDataContext } from '../contexts/context';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  const { loggedIn } = useContext(GlobalDataContext);

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
              width={horizontalScale(25)}
              height={verticalScale(25)}
              fill={
                focused ? theme.colors.primary_green : theme.colors.cool_gray
              }
            />
          ),
        }}
      />
      {loggedIn ? (
        <>
          <Tab.Screen
            name="Users"
            component={UsersScreen}
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
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
              tabBarIcon: ({ focused }) => (
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
              tabBarIcon: ({ focused }) => (
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
        </>
      ) : (
        <Tab.Screen
          name="Auth"
          component={AuthNavigation}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
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
      )}
    </Tab.Navigator>
  );
}
