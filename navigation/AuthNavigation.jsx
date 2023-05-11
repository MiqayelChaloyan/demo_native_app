import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authentication/signUp/SignUpScreen';
import LogInScreen from '../screens/authentication/login/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
