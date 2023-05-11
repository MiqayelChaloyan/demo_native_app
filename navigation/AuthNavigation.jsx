import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/login/LoginScreen';
import SignUpScreen from '../screens/authentication/signIp/SignUpScreen';


const Stack = createNativeStackNavigator();

export default function AuthNavigation() {


    return (
        <>


            <Stack.Navigator >

                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}

                />





                <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{
                        headerStyle: { backgroundColor: 'coral' }
                    }}
                />






            </Stack.Navigator>

        </>
    );
}


