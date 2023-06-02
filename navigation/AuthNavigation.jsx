import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authentication/signUp/SignUpScreen';
import LogInScreen from '../screens/authentication/login/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
