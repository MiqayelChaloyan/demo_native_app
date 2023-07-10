import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from '../screens/ContentScreen';
import FeedScreen from '../screens/FeedScreen';
import ItemDescriptionScreen from '../screens/ItemDescriptionScreen';
import MarketScreen from '../screens/MarketScreen';
import UserOptionsScreen from '../screens/UserOptionsScreen';
import SettingsNavigation from './SettingsNavigation';
import AccountSettings from '../screens/AccountSettingsScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function PageNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Content" component={ContentScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="SettingsNav" component={SettingsNavigation} />
      <Stack.Screen name="Options" component={UserOptionsScreen} />
      <Stack.Screen
        name="Description"
        component={ItemDescriptionScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="Payment" component={PaymentScreen} />

    </Stack.Navigator>
  );
}
