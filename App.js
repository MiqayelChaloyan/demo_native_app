import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import DNAdata from './Data/data';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar />

      <DNAdata>
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </DNAdata>
    </SafeAreaView>
  );
}

export default App;
