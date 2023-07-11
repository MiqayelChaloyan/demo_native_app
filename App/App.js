import {SafeAreaView} from 'react-native';
import GlobalData from '../contexts/context';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation';
import MyStatusBar from '../components/StatusBar';
import styles from './style';

function App() {

return (
  <SafeAreaView style={styles.root}>
    <GlobalData>
      <NavigationContainer>
        <MyStatusBar>
          <StackNavigation />
        </MyStatusBar>
      </NavigationContainer>
    </GlobalData>
  </SafeAreaView>
);
}

export default App;
