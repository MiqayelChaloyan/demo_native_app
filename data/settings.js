import {Alert} from 'react-native';
import AboutIcon from '../assets/icons/About.svg';
import AccountIcon from '../assets/icons/Account.svg';
import SupportIcon from '../assets/icons/Help.svg';
import MessagesIcon from '../assets/icons/Message.svg';
import NotificationIcon from '../assets/icons/Notifications.svg';
import PrivacyIcon from '../assets/icons/Privacy.svg';
import ImagesIcon from '../assets/icons/Images.svg';

const settings = [
  {
    key: 'account',
    icon: AccountIcon,
    title: 'Account',
    onPress: navigation => navigation.navigate('AccountSettings'),
  },
  {
    key: 'notifications',
    icon: NotificationIcon,
    title: 'Notifications',
    onPress: () => Alert.alert('Navigated to Notifications page'),
  },
  {
    key: 'images',
    icon: ImagesIcon,
    title: 'Images',
    onPress: navigation => navigation.navigate('Images'),
  },
  {
    key: 'messages',
    icon: MessagesIcon,
    title: 'Messages',
    onPress: navigation => navigation.navigate('Messages'),
  },
  {
    key: 'privacy',
    icon: PrivacyIcon,
    title: 'Privacy',
    onPress: () => Alert.alert('Navigated to Privacy page'),
  },
  {
    key: 'support',
    icon: SupportIcon,
    title: 'Help & Support',
    onPress: navigation => navigation.navigate('Support'),
  },
  {
    key: 'about',
    icon: AboutIcon,
    title: 'About',
    onPress: () => Alert.alert('Navigated to About page'),
  },
];

export default settings;
