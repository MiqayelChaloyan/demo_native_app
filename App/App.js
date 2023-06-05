import {SafeAreaView, StatusBar} from 'react-native';
import GlobalData from '../contexts/context';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation';
import styles from './style';

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <GlobalData>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </GlobalData>
    </SafeAreaView>
  );
}

export default App;
