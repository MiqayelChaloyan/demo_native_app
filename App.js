import React from 'react';
import LoginScreen from './screens/authentication/login/LoginScreen';
import FeedScreen from './screens/Feed/FeedScreen';
// import ContentScreen from './screens/Content/ContentScreen';
// import MarketScreen from './screens/Market/MarketScreen';
// import LongContentScreen from './screens/Market/TTTTT';

import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import DNAdata from './Data/data';
import SignUpScreen from './screens/authentication/signUp/SignUpScreen';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar />

      <StackNavigation />
    </SafeAreaView>
  );
}

export default App;
