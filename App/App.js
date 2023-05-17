import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import DNAdata from '../Data/data';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation';
import styles from './style';

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <DNAdata>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </DNAdata>
    </SafeAreaView>
  );
}

export default App;
