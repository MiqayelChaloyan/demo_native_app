import {createContext, useState} from 'react';
import {Alert} from 'react-native';
import AboutIcon from '../assets/icons/About.svg';
import AccountIcon from '../assets/icons/Account.svg';
import SupportIcon from '../assets/icons/Help.svg';
import MessagesIcon from '../assets/icons/Message.svg';
import NotificationIcon from '../assets/icons/Notifications.svg';
import PrivacyIcon from '../assets/icons/Privacy.svg';
import ImagesIcon from '../assets/icons/Images.svg';

export const GlobalDataContext = createContext(undefined);

function GlobalData({children}) {
  const [feedData, setFeedData] = useState([
    {
      title: 'GAZELLE SHOES',
      message:
        'With their classic suede design and plethora of effortless yet elevated styling options, Gazelle shoes feel more relevant today than ever. This iteration takes their inspiration from the 1991 version in an exact replica, featuring authentic materials, a T-toe design and a molded tongue. Step out in time-honored style.',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
      createdData: new Date('2022-01-01'),
      id: 1,
    },
    {
      title: 'ULTRABOOST',
      message:
        'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date and boasts a 10% lower carbon footprint than previous models (for more information see FAQs below). With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Running_Shoes_White_HQ6351_01_standard.jpg',
      createdData: new Date('2020-08-14'),
      id: 2,
    },
    {
      title: 'FORUM LOW CL X',
      message:
        'Clearly retro and undeniably fresh. Make an impression in these adidas Forum shoes that mix `80s hoops heritage with modern energy. They may have roots on the hardwood, but these sneakers are poised to make new moves. So lace in and look good while you get after your day.',

      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94c39d2867404df293a7af5b0105eef2_9366/Forum_Low_CL_x_Indigo_Herz_Shoes_White_IE1855_HM1.jpg',
      createdData: new Date('2012-07-01'),
      id: 3,
    },
    {
      title: 'FORUM LOW SHOES',
      message:
        'Welcome to a new age of originality. Inspired by the adidas Originals-owned NFT, the Indigo Herz Drop is an invitation to self-express without limitations. No matter which world you`re in.Step into the Metaverse in the Forum Low CL x Indigo Herz Shoes. Cloaked in the signature colors of Indigo Herz, the court-inspired shoes nod to OG with a classic silhouette and iconic layering. A translucent yellow outsole and inverted Trefoil logo bring the bold, optimistic vibes from an alternative reality. ',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2547ff40b3f47818118aed2015e64c6_9366/Forum_Low_Shoes_Black_FZ5891_01_standard.jpg',
      createdData: new Date('2023-04-20'),
      id: 4,
    },
  ]);

  const [marketData, setMarketData] = useState([
    {
      title: 'GAZELLE SHOES',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
      price: '$19.99',
      id: '1',
    },
    {
      title: 'ULTRABOOST',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Running_Shoes_White_HQ6351_01_standard.jpg',
      price: '$19.99',
      id: '2',
    },
    {
      title: 'FORUM LOW CL X',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94c39d2867404df293a7af5b0105eef2_9366/Forum_Low_CL_x_Indigo_Herz_Shoes_White_IE1855_HM1.jpg',
      price: '$19.99',
      id: '3',
    },
    {
      title: 'FORUM LOW SHOES',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2547ff40b3f47818118aed2015e64c6_9366/Forum_Low_Shoes_Black_FZ5891_01_standard.jpg',
      price: '$19.99',
      id: '4',
    },
    {
      title: 'GAZELLE SHOES',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
      price: '$19.99',
      id: '5',
    },
  ]);

  const [messages, setMessages] = useState([
    {
      user: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
    },
    {
      user: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      user: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      user: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
    },
  ]);

  const expensesData = [
    {
      title: 'Item1',
      price: 15,
    },
    {
      title: 'Item2',
      price: 30,
    },
    {
      title: 'Item3',
      price: 28,
    },
    {
      title: 'Item4',
      price: 35,
    },
    {
      title: 'Item5',
      price: 12,
    },
    {
      title: 'Item6',
      price: 48,
    },
    {
      title: 'Item7',
      price: 32,
    },
    {
      title: 'Item8',
      price: 25,
    },
  ];

  const [usersList, setUsersList] = useState([
    {
      id: 0,
      fullName: 'Terry Dotson',
      isActive: true,
      imageUrl:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 1,
      fullName: 'Warren Belz',
      isActive: true,
      imageUrl:
        'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      fullName: 'Marie Pasquet',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 3,
      fullName: 'Lauriane Rolland',
      isActive: true,
      imageUrl:
        'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 4,
      fullName: 'John Smith',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/2224699/pexels-photo-2224699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 5,
      fullName: 'Alisa Rolland',
      isActive: true,
      imageUrl: null,
    },
    {
      id: 6,
      fullName: 'Patricia Heaton',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/2690774/pexels-photo-2690774.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 7,
      fullName: 'Alisa Rolland',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/3348129/pexels-photo-3348129.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 8,
      fullName: 'Lauriane Rolland',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 9,
      fullName: 'AnnaSophia Robb',
      isActive: false,
      imageUrl:
        'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ]);

  const [radioButtonsData, setRadioButtonsData] = useState([
    {
      id: '1',
      label: 'Radio option here...',
      selected: false,
    },
    {
      id: '2',
      label: 'Radio option here...',
      selected: false,
    },
    {
      id: '3',
      label: 'Radio option here...',
      selected: false,
    },
    {
      id: '4',
      label: 'Radio option here...',
      selected: false,
    },
    {
      id: '5',
      label: 'Radio option here...',
      selected: false,
    },
    {
      id: '6',
      label: 'Radio option here...',
      selected: false,
    },
  ]);

  const settingsData = [
    {
      key: 'account',
      icon: AccountIcon,
      title: 'Account',
      onPress: () => Alert.alert('Navigated to Account page'),
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

  const [arrayImages, setArrayImage] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  return (
    <GlobalDataContext.Provider
      value={{
        feedData,
        setFeedData,
        marketData,
        setMarketData,
        setMessages,
        messages,
        expensesData,
        usersList,
        setUsersList,
        radioButtonsData,
        setRadioButtonsData,
        settingsData,
        arrayImages,
        setArrayImage,
        imageUrl,
        setImageUrl,
      }}>
      {typeof children === 'function' ? children() : children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalData;
