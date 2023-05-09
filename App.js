import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LoginScreen from './screens/authentication/login/LoginScreen';
import FeedScreen from './screens/Feed/FeedScreen';
import ContentScreen from './screens/Content/ContentScreen';
import MarketScreen from './screens/Market/MarketScreen';
import LongContentScreen from './screens/Market/TTTTT';

function App() {
  return (
    <SafeAreaView style={{
      flex:1 ,
       }}  >
        <MarketScreen/>
        {/* <ContentScreen/> */}
        {/* <FeedScreen/> */}
        {/* <LoginScreen/> */}
        

    </SafeAreaView>
      

  );
}

export default App;
