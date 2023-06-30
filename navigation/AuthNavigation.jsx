import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authentication/signUp/SignUpScreen';
import SignInScreen from '../screens/authentication/signIn/SignInScreen';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
export default memo(AuthNavigation);
