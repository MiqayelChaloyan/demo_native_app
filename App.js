import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import DNAdata from './Data/data';

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
