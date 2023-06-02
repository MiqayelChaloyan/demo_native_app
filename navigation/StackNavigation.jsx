import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import ExpensesScreen from '../screens/ExpensesScreen/ExpensesScreen';
import MessagesList from '../screens/MessagesScreen/MessagesList';
import BottomTabNavigation from './BottomTabNavigation';
import InsightsScreen from '../screens/InsightsScreen/InsightsScreen';
import ImagesScreen from '../screens/ImagesScreen/ImagesScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bottom" component={BottomTabNavigation} />
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
      <Stack.Screen name="Chat" component={MessagesList} />
      <Stack.Screen name="Insights" component={InsightsScreen} />
      <Stack.Screen name="Images" component={ImagesScreen} />
    </Stack.Navigator>
  );
}
