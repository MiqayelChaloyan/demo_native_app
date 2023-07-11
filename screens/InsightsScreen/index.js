import {memo} from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import ListOfExpenses from '../ExpensesScreen/ListOfExpenses';
import PropTypes from 'prop-types';
import styles from './style';

const InsightsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.insights}>
        <Header
          screen="Insights"
          navigation={navigation}
          continueTo="Calendar"
          back="Expenses"
          left="Back"
          right="Filter"
        />
        <View style={styles.progressCircle}>
          <ProgressCircle />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <ListOfExpenses />
      </View>
    </View>
  );
};

InsightsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(InsightsScreen);
